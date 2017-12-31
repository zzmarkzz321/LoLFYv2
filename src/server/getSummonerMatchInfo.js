'use strict';

const Axios = require('axios');
const baseURI = 'https://na1.api.riotgames.com';
require('dotenv').config();
const RIOT_API_KEY = process.env.RIOT_API;


/**
 * Formats all the data from the RIOT APIs and returns a json with the required info
 * @private
 */
const _formatMatchData = (matchDetails, participantID, summonerName) => {
    const participantBase = matchDetails.participants[participantID - 1];
    const participantStats = participantBase.stats;

    const outcome = participantStats.win ? "Victory" : "Defeat";
    const gameLength = matchDetails.gameDuration / 60;

    const summonerSpells = [
        participantBase.spell1Id,
        participantBase.spell2Id
    ];

    const champion = participantBase.championId;

    const items = [
        participantStats.item0,
        participantStats.item1,
        participantStats.item2,
        participantStats.item3,
        participantStats.item4,
        participantStats.item5,
        participantStats.item6,
    ];

    const kills = participantStats.kills;
    const deaths = participantStats.deaths;
    const assists = participantStats.assists;
    const kda = kills + ' / ' + deaths + ' / ' + assists;

    const championLevel = participantStats.champLevel;
    const creepScore = participantStats.totalMinionsKilled + participantStats.neutralMinionsKilled;
    const creepScorePerMinute = Math.round((creepScore/gameLength) * 10) / 10;

    let matchDetailsSchema = {
        outcome,
        gameLength,
        summonerName,
        summonerSpells,
        champion,
        kda,
        items,
        championLevel,
        creepScore,
        creepScorePerMinute
    };

    return Promise.resolve(matchDetailsSchema);
};

/**
 * Grabs the match info given a matchID
 * @param matchID
 */
const _getMatchInfo = (matchID) => {
    let url = '/lol/match/v3/matches/' + matchID + '?api_key=';
    return Axios.get(baseURI + url + RIOT_API_KEY)
        .then(response => response.data)
        .catch(err => err);
};

/**
 * Gets all recent matches affiliated with the summoner ID
 * @private
 */
const _getRecentMatches = (summonerID) => {
    let url = '/lol/match/v3/matchlists/by-account/' + summonerID + '/recent?api_key=';
    return Axios.get(baseURI + url + RIOT_API_KEY)
            .then(response => response.data.matches)
            .catch(err => err)
};

/**
 * Grabs the summoner ID from the given summoner name
 * @private
 */
const _getSummonerId = (summonerName) => {
    let url = '/lol/summoner/v3/summoners/by-name/' + summonerName + '?api_key=';
    return Axios.get(baseURI + url + RIOT_API_KEY)
            .then(response => response.data.accountId)
            .catch(err => err);
};

/**
 * Sends a summoner's match info from a google function
 */
exports.getSummonerMatchInfo = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Headers', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST')
        .status(200);

    const summonerName = req.body.summonerName || req.get('summonerName');
    const getSummonerIdPromise = _getSummonerId(summonerName);

    return getSummonerIdPromise
        .then(summonerID => _getRecentMatches(summonerID))
        .then(recentMatches => recentMatches.map(x => x.gameId))
        .then(allRecentMatchesID => _getMatchInfo(allRecentMatchesID[0]))
        .then(matchDetails => {
            const participantIdentity = matchDetails.participantIdentities
                .filter(x => x.player.summonerName.toLowerCase() === summonerName.toLowerCase());
            return _formatMatchData(matchDetails, participantIdentity[0].participantId, participantIdentity[0].player.summonerName);
        })
        .then(formattedMatchData => res.send(JSON.stringify(formattedMatchData, null, 2)))
        .catch(err => res.send({"error": "Please renew the RIOT API Key"}));
};
const Axios = require('axios');
const baseURI = 'https://na1.api.riotgames.com';
const RIOT_API_KEY = process.env.RIOT_API;

const { matchInfo } = require('./matchInfo');
const { summonerInfo } = require('./summonerInfo');
const { recentMatches } = require('./recentMatches');

/**
 * Formats all the data from the RIOT APIs and returns a json with the required info
 * @private
 */
const _formatMatchData = (matchDetails, participantID, summonerName) => {
    console.log("formatMatchData");
    console.log(participantID);
    console.log(summonerName);
    const participantBase = matchDetails.participants[participantID - 1];
    const participantStats = participantBase.stats;

    const outcome = participantStats.win ? "Victory" : "Defeat";
    const gameLength = matchDetails.gameDuration;

    // TODO translate the summoner spell ID to an image
    const summonerSpells = [
        participantBase.spell1Id,
        participantBase.spell2Id
    ];

    // TODO translate this to champion image
    const champion = participantBase.championId;

    // TODO translate to item images
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
    const kda = kills + '/' + deaths + '/' + assists;

    const championLevel = participantStats.champLevel;
    const creepScore = participantStats.totalMinionsKilled;
    const creepScorePerMinute = gameLength/creepScore;

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
 * Grabs the summoner spell Image
 *
 */
const _getSummonerSpellImage = (spellID) => {

};

/**
 * Grabs the item Image
 *
 */
const _getItemImage = (itemID) => {

};

/**
 * Grabs the champion image
 * @private
 */
const _getChamponImage = (championID) => {

};

/**
 * Grabs the match info given a matchID
 * @param matchID
 */
const _getMatchInfo = (matchID) => {
    let url = '/lol/match/v3/matches/' + matchID + '?api_key=';
    return Axios.get(baseURI + url + RIOT_API_KEY)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            return ({err});
        });
};

/**
 * Gets all recent matches affiliated with the summoner ID
 * @private
 */
const _getRecentMatches = (summonerID) => {
    let url = '/lol/match/v3/matchlists/by-account/' + summonerID + '/recent?api_key=';
    return Axios.get(baseURI + url + RIOT_API_KEY)
            .then((response) => {
                console.log(response.data.matches);
                return response.data.matches;
            })
            .catch((err) => {
                return err;
            })
};

/**
 * Grabs the summoner ID from the given summoner name
 * @private
 */
const _getSummonerId = (summonerName) => {
    let url = '/lol/summoner/v3/summoners/by-name/' + summonerName + '?api_key=';
    return Axios.get(baseURI + url + RIOT_API_KEY)
            .then((response) => {
                return response.data.accountId;
            })
            .catch((err) => {
                return (err);
            })
};

// console.log(_formatMatchData(matchInfo, 1, "Mark and Sweep"));

const _testEverything = () => {
    const summonerName = "Mark and Sweep";
    const getSummonerIdPromise = _getSummonerId(summonerName);

    return getSummonerIdPromise
        .then(summonerID => _getRecentMatches(summonerID))
        .then(recentMatches => recentMatches.map((x) => x.gameId))
        .then(allRecentMatchesID => _getMatchInfo(allRecentMatchesID[0]))
        .then(matchDetails => {
            const participantIdentity = matchDetails.participantIdentities.filter(x => x.player.summonerName === summonerName);
            return _formatMatchData(matchDetails, participantIdentity[0].participantId, summonerName);
        })
        .then(formattedMatchData => console.log(JSON.stringify(formattedMatchData, null, 2)))
        .catch(err => console.log(err));
};

// _testEverything();

/**
 * Sends a summoner info from google function
 * TODO rename this to getMatchInfo
 */
exports.getSummonerInfo = (req, res) => {
    const summonerName = req.summonerName;
    const getSummonerIdPromise = _getSummonerId(summonerName);

    return getSummonerIdPromise
        .then(summonerID => _getRecentMatches(summonerID))
        .then(recentMatches => recentMatches.map((x) => x.gameId))
        .then(allRecentMatchesID => _getMatchInfo(allRecentMatchesID[0]))
        .then(matchDetails => {
            const participantIdentity = matchDetails.participantIdentities.filter(x => x.player.summonerName === summonerName);
            return _formatMatchData(matchDetails, participantIdentity[0].participantId, summonerName);
        })
        .then(formattedMatchData => res.send("matchInfo" + JSON.stringify(formattedMatchData, null, 2)))
        .catch(err => console.log(err));
};
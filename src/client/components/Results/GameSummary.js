import React from 'react';
import championIdMap from '../../common';
import styled from "react-emotion";

const championSpriteCdn = 'http://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/';

const Outcome = styled('h2')`
    color: ${props => props.victory ? 'green' : 'red'}
`;

const ChampionAvatar = styled('img')`
    width: 86px;
    height: 86px;
    border-radius: 50%;
`;

export const GameSummary = ({matchInfo}) => {
    const gameLengthSeconds = matchInfo.gameLength % 1;
    const gameLengthSecondsConverted = Math.trunc(gameLengthSeconds * 60);
    const gameLengthMinute = Math.trunc(matchInfo.gameLength);

    return (
        <section>
            <h1>RECENT GAME: {gameLengthMinute}m {gameLengthSecondsConverted}s</h1>
            <Outcome victory={matchInfo.outcome === 'Victory'}>{matchInfo.outcome}</Outcome>
            <ChampionAvatar src={championSpriteCdn.concat(championIdMap[matchInfo.champion], '.png')}/>

            <h2>{championIdMap[matchInfo.champion]}</h2>
            <h2>{matchInfo.summonerName}</h2>
            <h3>Level {matchInfo.championLevel}</h3>
        </section>
    )
};
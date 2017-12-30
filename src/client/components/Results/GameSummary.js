import React from 'react';
import championIdMap from '../../common';
import styled from "react-emotion";
import { SummonerSpells } from "./SummonerSpells";

const championSpriteCdn = 'http://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/';

const Outcome = styled('h2')`
    color: ${props => props.victory ? 'green' : 'red'}
`;

const ChampionAvatar = styled('img')`
    width: 86px;
    height: 86px;
    border-radius: 50%;
`;

const SummaryContainer = styled('section')`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const GameSummary = ({matchInfo}) => {
    const gameLengthSeconds = matchInfo.gameLength % 1;
    const gameLengthSecondsConverted = Math.trunc(gameLengthSeconds * 60);
    const gameLengthMinute = Math.trunc(matchInfo.gameLength);

    return (
        <SummaryContainer>
            <div>
                <Outcome victory={matchInfo.outcome === 'Victory'}>{matchInfo.outcome}</Outcome>
                <p>{gameLengthMinute}m {gameLengthSecondsConverted}s</p>
                <p>Level {matchInfo.championLevel}</p>
            </div>
            <div>
                <ChampionAvatar src={championSpriteCdn.concat(championIdMap[matchInfo.champion], '.png')}/>
                <SummonerSpells summonerSpells={matchInfo.summonerSpells}/>
            </div>
            <div>
                <h3>{championIdMap[matchInfo.champion]}</h3>
            </div>
        </SummaryContainer>
    )
};
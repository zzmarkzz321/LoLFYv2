import React from 'react';
import championIdMap from '../../common';
import styled from "react-emotion";
import { SummonerSpells } from "./SummonerSpells";

const championSpriteCdn = 'http://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/';

const Outcome = styled('h4')`
    color: ${props => props.victory ? 'green' : 'red'};
    line-height: 0;
`;

const GameDuration = styled('h4')`
    line-height: 0;
`;

const ChampionLevel = styled('h4')``;

const ChampionAvatar = styled('img')`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

const SummaryContainer = styled('section')`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ChampSumWrapper = styled('div')`

`;

export const GameSummary = ({matchInfo}) => {
    const gameLengthSeconds = matchInfo.gameLength % 1;
    const gameLengthSecondsConverted = Math.trunc(gameLengthSeconds * 60);
    const gameLengthMinute = Math.trunc(matchInfo.gameLength);

    return (
        <SummaryContainer>
            <div>
                <Outcome victory={matchInfo.outcome === 'Victory'}>{matchInfo.outcome}</Outcome>
                <GameDuration>{gameLengthMinute}m {gameLengthSecondsConverted}s</GameDuration>
                <ChampionLevel>Level {matchInfo.championLevel}</ChampionLevel>
            </div>
            <ChampSumWrapper>
                <ChampionAvatar src={championSpriteCdn.concat(championIdMap[matchInfo.champion], '.png')}/>
                <SummonerSpells summonerSpells={matchInfo.summonerSpells}/>
            </ChampSumWrapper>
            <div>
                <h3>{championIdMap[matchInfo.champion]}</h3>
            </div>
        </SummaryContainer>
    )
};
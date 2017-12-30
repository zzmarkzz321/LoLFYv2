import React from 'react';
import styled, { injectGlobal } from "react-emotion";

import { Items, GameSummary, GameStats } from "./";

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;;
        background-color: #222;
        color: white;
    }
    
    a:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const MatchContainer = styled('section')`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background: rgba(255, 0, 0, 0.4);
    margin: 5% 10%;
`;


const Navigation = styled('nav')`
    margin: 5% 10%;
    display: block;
`;

const HomeButton = styled('a')`
    font-size: 35px;
    color: #fff;
    & span {
    color: #f00;
    }
`;

const SummonerName = styled('h1')`
    margin-left: 10%;
`;

const _reload = () => {
    window.location.reload();
};

export const Results = ({matchInfo}) => {
    if (matchInfo.championLevel !== undefined)
        return (
            <div>
                <Navigation>
                    <HomeButton onClick={_reload}>LOL<span>FY</span></HomeButton>
                </Navigation>

                <SummonerName>{matchInfo.summonerName}</SummonerName>

                <MatchContainer>
                    <GameSummary matchInfo={matchInfo}/>
                    <GameStats matchInfo={matchInfo}/>
                    <Items items={matchInfo.items}/>
                </MatchContainer>
            </div>
        );

    return (
        <div>
            <h1>Summoner Not Found!</h1>
        </div>
    )
};
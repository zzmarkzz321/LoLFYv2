import React from 'react';
import styled, { css, injectGlobal } from "react-emotion";

import { Items, GameSummary, GameStats } from "./";
import { SearchBox } from "../Home/SearchBox";

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #222;
        color: white;
    }
`;

const MatchContainer = styled('section')`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5% 0%;
    text-align: center;
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
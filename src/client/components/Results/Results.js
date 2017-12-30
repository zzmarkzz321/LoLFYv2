import React from 'react';
import styled, { css, injectGlobal } from "react-emotion";

import { Items, GameSummary, GameStats} from "./";

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
    margin: 5% 0%;
    text-align: center;
`;


const Navigation = styled('nav')`
    margin: 5% 10%;
    display: block;
`;

const homeButton = css`
    font-size: 35px;
    color: #fff;
    & span {
    color: #f00;
    }
`;

export const Results = ({matchInfo}) => {
    if (matchInfo.championLevel !== undefined)
        return (
            <div>
                <Navigation>
                    <a className={homeButton}>LOL<span>FY</span></a>
                </Navigation>
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
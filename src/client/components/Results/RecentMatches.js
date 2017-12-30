import React, { Component } from 'react';
import styled from "react-emotion";

const MatchListContainer = styled('section')`
    display: block;
    margin: auto;
    text-align: center;
`;

const RecentMatch = styled('li')`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
`;

export const RecentMatchesList = (props) => (
    <MatchListContainer>
        <h2> Recent Match History </h2>
        <ul>
            <RecentMatch>
                <ChampionAvatar/>
                <div>
                    <Outcome victory={false}>Defeat</Outcome>
                    <h3>23:33</h3>
                </div>
            </RecentMatch>
        </ul>
    </MatchListContainer>
);
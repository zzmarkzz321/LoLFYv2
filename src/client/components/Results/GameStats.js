import React from 'react';
import styled from 'react-emotion';

const KDA = styled('p')`
    line-height: 0;
    font-size: 0.9em;
`;

const CreepScore = styled('p')`
    line-height: 0;
    font-size: 0.9em;
`;

const CreepScorePerMinute = styled('p')`
    line-height: 0;
    font-size: 0.9em;
`;

export const GameStats = ({matchInfo}) => (
    <section>
        <KDA>{matchInfo.kda} KDA</KDA>
        <CreepScore>{matchInfo.creepScore} CS</CreepScore>
        <CreepScorePerMinute>{matchInfo.creepScorePerMinute} CS/Min</CreepScorePerMinute>
    </section>
);
import React from 'react';

export const GameStats = ({matchInfo}) => (
    <section>
        <p>{matchInfo.kda} KDA</p>
        <p>{matchInfo.creepScore} CS</p>
        <p>{matchInfo.creepScorePerMinute} CS/Min</p>
    </section>
);
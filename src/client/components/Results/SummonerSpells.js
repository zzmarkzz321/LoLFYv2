import React from 'react';
import styled from 'react-emotion';
import { summonerSpellInfo } from '../../assets/summonerSpellInfo';

const SpellIcon = styled('img')`
    width: 36px;
    height: 36px;
`;

export const SummonerSpells = ({summonerSpells}) => {
    const summonerSpell1CDN = summonerSpellInfo.filter(x => x.key === summonerSpells[0])[0].icon;
    const summonerSpell2CDN = summonerSpellInfo.filter(x => x.key === summonerSpells[1])[0].icon;

    return (
        <div>
            <SpellIcon src={summonerSpell1CDN}/>
            <SpellIcon src={summonerSpell2CDN}/>
        </div>
    )
};
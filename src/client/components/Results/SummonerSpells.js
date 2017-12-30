import React from 'react';
import styled from 'react-emotion';
import { summonerSpellInfo } from '../../assets/summonerSpellInfo';

const SpellIcon = styled('img')`
    width: 27px;
    height: 27px;
`;

export const SummonerSpells = ({summonerSpells}) => {
    const summs = summonerSpellInfo.data;
    const summonerSpellAvatarCDN = 'https://ddragon.leagueoflegends.com/cdn/7.8.1/img/spell/';
    let summonerSpell1 = {};
    let summonerSpell2 = {};

    Object.keys(summs).forEach(key => {
        if (summs[key].id === summonerSpells[0]) summonerSpell1 = summs[key];
        if (summs[key].id === summonerSpells[1]) summonerSpell2 = summs[key];
    });

    console.log(summonerSpell1);

    return (
        <div>
            <SpellIcon src={summonerSpellAvatarCDN.concat(summonerSpell1.image.full)} alt=""/>
            <SpellIcon src={summonerSpellAvatarCDN.concat(summonerSpell2.image.full)} alt=""/>
        </div>
    )
};
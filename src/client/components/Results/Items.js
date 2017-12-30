import React from 'react';
import styled from "react-emotion";

const itemSpriteCdn = 'http://ddragon.leagueoflegends.com/cdn/7.5.2/img/item/';

const ItemAvatar = styled('img')`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;

const ItemTable = styled('table')`
`;

export const Items = ({items}) => (
    <ItemTable>
        <tbody>
        <tr>
            <td><ItemAvatar src={itemSpriteCdn.concat(items[0], '.png')} alt=""/></td>
            <td><ItemAvatar src={itemSpriteCdn.concat(items[1], '.png')} alt=""/></td>
            <td><ItemAvatar src={itemSpriteCdn.concat(items[2], '.png')} alt=""/></td>
            <td><ItemAvatar src={itemSpriteCdn.concat(items[6], '.png')} alt=""/></td>
        </tr>
        <tr>
            <td><ItemAvatar src={itemSpriteCdn.concat(items[3], '.png')} alt=""/></td>
            <td><ItemAvatar src={itemSpriteCdn.concat(items[4], '.png')} alt=""/></td>
            <td><ItemAvatar src={itemSpriteCdn.concat(items[5], '.png')} alt=""/></td>
        </tr>
        </tbody>
    </ItemTable>
);
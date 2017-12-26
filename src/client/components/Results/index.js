import React, { Component } from 'react';
import styled, { injectGlobal } from "react-emotion";
import championIdMap from '../../common';

const championSpriteCdn = 'http://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/';
const itemSpriteCdn = 'http://ddragon.leagueoflegends.com/cdn/7.5.2/img/item/';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #222;
        color: white;
    }
`;

const ChampionAvatar = styled('img')`
    width: 86px;
    height: 86px;
    border-radius: 50%;
`;

const ItemAvatar = styled('img')`
    width: 46px;
    height: 46px;
    border-radius: 50%;
`;

const ItemTable = styled('table')`
    margin: 0 auto;
`;

const MatchContainer = styled('section')`
    margin: 5% 0%;
    text-align: center;
`;

const Outcome = styled('h2')`
    color: ${props => props.victory ? 'green' : 'red'}
`;


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

const RecentMatchesList = (props) => (
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

export class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "search": true,
        };
    }

    render() {
        const matchInfo = this.props.matchInfo;
        if (matchInfo.championLevel !== undefined)
            return (
                <MatchContainer>

                    <h1>RECENT GAME: {Math.ceil(matchInfo.gameLength/60)} min</h1>

                    <Outcome victory={matchInfo.outcome === 'Victory'}>{matchInfo.outcome}</Outcome>

                    <ChampionAvatar src={championSpriteCdn.concat(championIdMap[matchInfo.champion], '.png')}/>

                    <h2>{championIdMap[matchInfo.champion]}</h2>
                    <h2>{matchInfo.summonerName}</h2>
                    <h3>Level {matchInfo.championLevel}</h3>

                    <p>{matchInfo.kda} KDA</p>
                    <p>{matchInfo.creepScore} CS</p>
                    <p>{matchInfo.creepScorePerMinute} CS/Min</p>

                    <ItemTable>
                        <tbody>
                        <tr>
                            <td><ItemAvatar src={itemSpriteCdn.concat(matchInfo.items[0], '.png')}/></td>
                            <td><ItemAvatar src={itemSpriteCdn.concat(matchInfo.items[1], '.png')}/></td>
                            <td><ItemAvatar src={itemSpriteCdn.concat(matchInfo.items[2], '.png')}/></td>
                        </tr>
                        <tr>
                            <td><ItemAvatar src={itemSpriteCdn.concat(matchInfo.items[3], '.png')}/></td>
                            <td><ItemAvatar src={itemSpriteCdn.concat(matchInfo.items[4], '.png')}/></td>
                            <td><ItemAvatar src={itemSpriteCdn.concat(matchInfo.items[5], '.png')}/></td>
                        </tr>
                        <tr>
                            <td><ItemAvatar src={itemSpriteCdn.concat(matchInfo.items[6], '.png')}/></td>
                        </tr>
                        </tbody>
                    </ItemTable>
                </MatchContainer>
            );

        return (
            <div>
                <h1>Summoner Not Found!</h1>
            </div>
        )
    }
}

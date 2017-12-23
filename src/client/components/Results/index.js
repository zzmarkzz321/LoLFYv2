import React, { Component } from 'react';
import styled from "react-emotion";
// import logo from '../../assets/emotion.png';
/*
* current match history info
*   outcome
*   game length
*   summoner name
*   champoion played
*   KDA
*   items bought
*   level
*   total creep score
*   creep score per minute (total creep score / game length)
*
* Other match history (list)
*   champion played
*   outcome
* */

/*
* TODO set up the URL-LOADER in webpack to handle images
* TODO
*
* */

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

const MatchContainer = styled('section')`
    display: flex;
    justify-content: space-evenly;
    margin: 10% 0%;
`;

const Outcome = styled('h2')`
    color: ${props => props.victory ? 'green' : 'red'}
`;

const CurrentMatchInfo = (props) => (
    <MatchContainer>
        {/*TODO add a src to the champion avatar*/}
        <ChampionAvatar src={"http://cdn.akc.org/content/article-body-image/shiba_inu_cute_puppies.jpg"}/>

        {/*TODO replace with champ, summoner, and level info*/}
        <h2>Ahri</h2>
        <h2>Mark and Sweep</h2>
        <p>Level 18</p>

        {/*TODO pass in props to victory and replace "Victory" with dynamic props*/}
        <Outcome victory={true}>Victory</Outcome>

        {/*TODO replace with game stats: KDA then CS per Min*/}
        <p>3.4 KDA</p>
        <p>6.7 CS/Min</p>

        {/*Items*/}
        <table>
            <tbody>
                {/*TODO replace with src of items in array*/}
                <tr>
                    <td><ItemAvatar src={"http://www.cutestpaw.com/wp-content/uploads/2011/11/Miss-You-My-Love.jpg"}/></td>
                    <td><ItemAvatar src={"http://www.cutestpaw.com/wp-content/uploads/2011/11/Miss-You-My-Love.jpg"}/></td>
                    <td><ItemAvatar src={"http://www.cutestpaw.com/wp-content/uploads/2011/11/Miss-You-My-Love.jpg"}/></td>
                </tr>
                <tr>
                    <td><ItemAvatar src={"http://www.cutestpaw.com/wp-content/uploads/2011/11/Miss-You-My-Love.jpg"}/></td>
                    <td><ItemAvatar src={"http://www.cutestpaw.com/wp-content/uploads/2011/11/Miss-You-My-Love.jpg"}/></td>
                    <td><ItemAvatar src={"http://www.cutestpaw.com/wp-content/uploads/2011/11/Miss-You-My-Love.jpg"}/></td>
                </tr>
            </tbody>
        </table>
    </MatchContainer>
);

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
            {/*TODO Dynamically generate the RecentMatch Component*/}
            <RecentMatch>
                <ChampionAvatar/>
                <div>
                    <Outcome victory={false}>Defeat</Outcome>
                    <h3>23:33</h3>
                </div>
            </RecentMatch>
            <RecentMatch>
                <ChampionAvatar/>
                <div>
                    <h2>Victory</h2>
                    <h3>23:33</h3>
                </div>
            </RecentMatch>
            <RecentMatch>
                <ChampionAvatar/>
                <div>
                    <h2>Victory</h2>
                    <h3>23:33</h3>
                </div>
            </RecentMatch>
            <RecentMatch>
                <ChampionAvatar/>
                <div>
                    <h2>Victory</h2>
                    <h3>23:33</h3>
                </div>
            </RecentMatch>
        </ul>
    </MatchListContainer>
);

export class Results extends Component {
    render() {
        return (
            <section>
                <CurrentMatchInfo/>
                <RecentMatchesList/>
            </section>
        );
    }
}

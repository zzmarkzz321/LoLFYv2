import React, { Component } from 'react';
import styled, { css, injectGlobal } from "react-emotion";
import { SearchBox, OverlayLoader, GithubRibbon } from './';
import { Results } from "../Results/";
import { getSummonerData } from "../../utils/getSummonerData";
import { Footer } from "../Layout/Footer";

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;;
    }
`;

const app = css`
    text-align: center;
    background-color: #222;
    color: #fff;
    height: 100vh;
    & a {
    color: #f60;
    }
`;

const appHeader = css`
    padding: 5%;
    color: white;
    & h1 {
        font-size: 6em;
        line-height: 10px;
    }
    & h1 span {
        color: #f00;
    }
`;

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "search": false,
            "outcome": "",
            "gameLength": 0,
            "summonerName": "",
            "summonerSpells": [],
            "champion": 0,
            "kda": "",
            "items": [],
            "championLevel": 0,
            "creepScore": 0,
            "creepScorePerMinute": 0
        };
    }

     _handleChange = (event) => {
        this.setState({summonerName: event.target.value});
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('loader-1').style.display = "block";
        return getSummonerData(this.state.summonerName)
            .then(res => {
                const matchInfo = res.data;
                this.setState({
                    "search": true,
                    "outcome": matchInfo.outcome,
                    "gameLength": matchInfo.gameLength,
                    "summonerName": matchInfo.summonerName,
                    "summonerSpells": matchInfo.summonerSpells,
                    "champion": matchInfo.champion,
                    "kda": matchInfo.kda,
                    "items": matchInfo.items,
                    "championLevel": matchInfo.championLevel,
                    "creepScore": matchInfo.creepScore,
                    "creepScorePerMinute": matchInfo.creepScorePerMinute
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        if (!this.state.search) {
            return (
                <div className={app}>
                    <GithubRibbon/>
                    <div className={appHeader}>
                        <h1>LOL<span>FY</span></h1>
                        <p>A mini League of Legends Stats App</p>
                    </div>
                    <SearchBox _handleChange={this._handleChange} _handleSubmit={this._handleSubmit}/>
                    <Footer/>
                    <OverlayLoader/>
                </div>
            )
        }
        return (
            <Results matchInfo={this.state}/>
        )
    }
}
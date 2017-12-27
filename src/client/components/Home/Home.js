import React, { Component } from 'react';
import { css, injectGlobal } from "react-emotion";
import { SearchBox } from './';
import { Results } from "../Results/index";
import { OverlayLoader } from './OverlayLoader';
import Axios from 'axios';

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
    padding: 7%;
    color: white;
    & h1 {
    font-size: 6em;
    }
    & h1 span {
    color: #f00;
    }
`;

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
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

    // Handle the API call to the server
    _handleSubmit = (event) => {
        document.getElementById('loader-1').style.display = "block";
        Axios.request({
            baseURL: 'https://us-central1-inspired-gift-162107.cloudfunctions.net/getSummonerMatchInfo',
            method: "POST",
            data: {
                summonerName: this.state.summonerName
            }
        }).then((res) => {
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
            })

        }).catch(err => {
            console.log(err);
        });

        event.preventDefault();
    };

    render() {
        if (!this.state.search) {
            return (
                <div className={app}>
                    <div className={appHeader}>
                        <h1>LOL<span>FY</span></h1>
                        <p>Mini LoL Stat Application. Powered by... a lot of things.</p>
                    </div>
                    <SearchBox _handleChange={this._handleChange} _handleSubmit={this._handleSubmit}/>
                    <OverlayLoader/>
                </div>
            )
        }

        return (
            <Results matchInfo={this.state}/>
        )
    }
}
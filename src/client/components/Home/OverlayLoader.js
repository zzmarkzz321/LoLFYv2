import React, { Component } from 'react';
import styled, { css } from "react-emotion";

const summonerIconCDN = 'http://ddragon.leagueoflegends.com/cdn/6.3.1/img/profileicon/777.png';

const loader = css`
    display: none;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.94);
    position: absolute;
    z-index: 999;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

const LoadingWrapper = styled('div')`
    margin: 15% auto;
`;

const Message = styled('h2')`
    color: #000;
    text-align: center;
`;

const Avatar = styled('img')`
    width: 106px;
    height: 106px;
    border-radius: 50%;
`;

export const OverlayLoader = () => (
    <div id="loader-1" className={loader}>
        <LoadingWrapper>
            <Avatar src={summonerIconCDN}/>
            <Message>Hang Tight! Doing some quick maths!</Message>
        </LoadingWrapper>
    </div>
);
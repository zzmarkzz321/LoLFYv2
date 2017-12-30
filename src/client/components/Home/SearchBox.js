import React from 'react';
import styled, { css } from 'react-emotion';

const searchWrapper = css`
    display: inline-flex;
    width: 300px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
    
    & input {
        outline:none;
        width: 300px;
        height: 50px;
        background: #2b303b;
        border: none;
        font-size: 10pt;
        float: left;
        color: #63717f;
        padding-left: 45px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
    
    & i {
        position: absolute;
        top: 50%;
        margin-left: 15px;
        margin-top: -7px;
        z-index: 1;
        color: #4f5b66;
    }
`;

const SearchInput = styled('input')`
    background: #fff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    padding: 1%;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
`;

export const SearchBox = props => (
    <form onSubmit={props._handleSubmit}>
        <div className={searchWrapper}>
            <i className="fa fa-search"/>
            <SearchInput type='text' placeholder='Search...' onChange={props._handleChange}/>
        </div>
    </form>
);
import React, { Component } from 'react';

export const SearchBox = props => (
    <form onSubmit={props._handleSubmit}>
        <div className='ui big icon input'>
            <input type='text' placeholder='Search...' onChange={props._handleChange}/>
            <button type='submit'>
                <i className='search link icon'></i>
            </button>
        </div>
    </form>
);
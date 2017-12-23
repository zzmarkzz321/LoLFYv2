import React from 'react';

export const SearchBox = (props) => (
    <form onSubmit={this._onSubmit} >
        <div className='ui big icon input'>
            <input type='text' placeholder='Search...'/>
            <button type='submit'>
                <i className='search link icon'></i>
            </button>
        </div>
    </form>
);
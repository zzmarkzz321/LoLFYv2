import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./Home";
import { Results } from "./Results";
import { NotFound } from "./NotFound";

export const App = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            {/*Remove in production*/}
            <Route name="results" path="/results" component={Results}/>
            <Route component={NotFound}/>
        </Switch>
    </HashRouter>
);

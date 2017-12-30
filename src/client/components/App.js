import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./Home";
import { Results } from "./Results";
import { NotFound } from "./NotFound";

export const App = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/results" component={Results}/>
            <Route component={NotFound}/>
        </Switch>
    </HashRouter>
);

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const App = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </HashRouter>
);

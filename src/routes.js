import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Work from './containers/Work';
import Skills from './containers/Skills';
import Launch from './containers/Launch';
import Extras from './containers/Extras';

export const Routes = () => (
    <div >
        <Switch>
            <Route exact path='/' component={Launch} />
            <Route exact path='/works' component={Work} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/extras' component={Extras} />
        </Switch>
    </div >
)
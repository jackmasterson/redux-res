import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Work from './containers/Work';
import Skills from './containers/Skills';
import Launch from './containers/Launch';

export const Routes = () => (
    <div >
        <Switch>
            <Route exact path='/' component={Launch} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/skills' component={Skills} />
        </Switch>
    </div >
)
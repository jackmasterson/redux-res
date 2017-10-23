import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Work from './containers/Work';
import Skills from './containers/Skills';
import Launch from './containers/Launch';
import Extras from './containers/Extras';
import SelectedPage from './containers/SelectedPage';

export const Routes = () => (
    <div >
        <Switch>
            <Route exact path='/' component={Launch} />
            <Route exact path='/works' component={Work} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/extras' component={Extras} />
            <Route exact path='/works/:class' component={SelectedPage} />
        </Switch>
    </div >
)
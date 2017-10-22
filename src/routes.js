import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SelectedPage from './containers/SelectedPage';

export const Routes = () => (
    <div >
        <Switch>
            <Route exact path='/work' component={SelectedPage} />
            {/* <Route path='/roster/:number' component={Player} /> */}
        </Switch>
    </div >
)
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
            <Route path='/projects' component={Work} />
            {/* <Route exact path='/projects/:class' component={SelectedPage} /> */}
            <Route exact path='/skillset' component={Skills} />
            <Route exact path='/skillset/:class' component={SelectedPage} />
            <Route exact path='/extracurriculars' component={Extras} />
            <Route exact path='/extracurriculars/:class' component={SelectedPage} />
        </Switch>
    </div >
)
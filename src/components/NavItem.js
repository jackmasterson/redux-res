import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import {Routes} from './../routes';

export const NavItem = (data) => (
    <div>
       <Link to={`/${data.href}`}>{data.text}</Link>
    </div>
)
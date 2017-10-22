import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import {Routes} from './../routes';

export const NavItem = (data) => (
    <div className="nav-item">
       <Link to={`/${data.href}`}>{data.text}</Link>
    </div>
)
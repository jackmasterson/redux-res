import React, {Component} from 'react';
import {Box} from '../components/Box';
import NavBar from './NavBar';
import {Routes} from './../routes';

export default class Main extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes/>
            </div>
        );
    }
}
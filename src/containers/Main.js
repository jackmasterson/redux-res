import React, {Component} from 'react';
import NavBar from './NavBar';
import {Routes} from './../routes';
import {PageHeader, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div className="shade">
                <div className="header-bar">
                    <PageHeader>Jack Masterson
                        <small> Software Engineer</small>
                        <Button
                            className="nav-item home"
                            bsStyle="success"
                            bsSize="small" >
                            <Link
                                className="nav-link"
                                to="/">Home</Link>
                        </Button>
                    </PageHeader>
                </div>
                <Routes/>
            </div>
        );
    }
}
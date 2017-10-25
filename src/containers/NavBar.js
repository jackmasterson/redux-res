import React, {Component} from 'react';
import {NavItem} from '../components/NavItem';

export default class NavBar extends Component {
    componentWillMount() {
        this.links = [{
            href: '',
            text: 'Home',
        }, {
            href: 'projects',
            text: 'Work Examples',
        }, {
            href: 'skillset',
            text: 'Tech Stack',
        }, /*{
            href: 'extracurriculars',
            text: 'Extracurriculars',
        }*/];
    }
    render() {
        return (
            <div className="nav-bar">
                {this.links.map(link => 
                    <NavItem key={link.href} {...link} />
                )}
            </div>
        );
    }
}
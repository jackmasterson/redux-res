import React, {Component} from 'react';
import {NavItem} from '../components/NavItem';

export default class NavBar extends Component {
    componentWillMount() {
        this.links = [{
            href: '',
            text: 'Home',
        }, {
            href: 'work',
            text: 'Work Examples',
        }, {
            href: 'skills',
            text: 'Tech Stack',
        }, {
            href: 'extras',
            text: 'Extracurriculars',
        }];
    }
    render() {
        return (
            <div>
                {this.links.map(link => 
                    <NavItem key={link.href} {...link} />
                )}
            </div>
        );
    }
}
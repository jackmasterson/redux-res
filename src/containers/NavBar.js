import React, {Component} from 'react';
import {NavItem} from '../components/NavItem';

export default class NavBar extends Component {
    componentWillMount() {
        this.links = [{
            href: 'work',
            text: 'Work Examples',
        }, {
            href: 'skills',
            text: 'Tech Stack',
        }, {
            href: 'extras',
            text: 'Extracurriculars',
        }, {
            href: '',
            text: 'Home',
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
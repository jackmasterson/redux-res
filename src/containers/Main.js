import React, {Component} from 'react';
import {Box} from '../components/Box';
import NavBar from './NavBar';
export default class Main extends Component {
    componentWillMount() {
        this.data = {
            works: [{
                title: 'Bus App',
                key: 1,
                class: 'bus-app'
            }, {
                title: 'Bus Website',
                key: 2,
                class: 'bus-website',
            }, {
                title: 'Old Resume',
                key: 3,
                class: 'old-resume',
            }, {
                title: 'Basic Data',
                key: 4,
                class: 'basic-data',
            }, {
                title: 'Arcade Game',
                key: 5,
                class: 'arcade-game',
            }],
            skills: [{
                title: 'Languages',
                key: 1,
                class: 'languages',
            }, {
                title: 'Frameworks/Libraries',
                key: 2,
                class: 'frameworks'
            }, {
                title: 'Build Tools',
                key: 3,
                class: 'build-tools'
            }],
            extras: [{
                title: 'Comedy',
                key: 1,
                class: 'comedy'
            }, {
                title: 'Writing',
                key: 2,
                class: 'writing'
            }]
        }
    }
    render() {
        let keys = Object.keys(this.data);

        return (
            <div className="box-wrapper">
                {keys.map(key => 
                    this.data[key].map(info =>
                        <Box 
                            className={info.class}
                            key={info.id} 
                            {...info} />
                    )
                )}
                <NavBar />
            </div>
        );
    }
}
import React, {Component} from 'react';
import Launch from '../containers/Launch';

export default class Work extends Component {
    componentDidMount() {
        console.log(this.state);
    }
    render() {
        return (
            <Launch />
        )
    }
}
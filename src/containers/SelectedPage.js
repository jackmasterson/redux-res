import React, {Component} from 'react';
import { connect } from 'react-redux';
import { filterNow } from '../reducers/data';

const mapStateToProps = (state) => ({
    state: state,
    data: state.data,
    filter: state.data.filter
});

class SelectedPage extends Component {
    componentWillMount() {
        let data = this.props.data;
        let keys = Object.keys(data);
        let location = this.props.location.pathname.split('/')[1];
        let subset = this.props.location.pathname.split('/')[2];
        let info = [];
        for (let key of keys) {
            if (key === location) {
                let use = data[key];
                for (let one of use) {
                    if (one.class === subset) {
                        info.push(one);
                    }
                }
            }
        }
        this.props.filterNow(info[0]);
    }
    render() {
        console.log(this.props.filter);
        if (this.props.filter) {
            return (
                <h1>{this.props.filter.title}</h1>
            );
        } else {
            return (
                <h1>Updating...</h1>
            )
        }

    }
}

export default connect(mapStateToProps, {filterNow})(SelectedPage);
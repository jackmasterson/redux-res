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
        if (this.props.filter && this.props.filter.src) {
            return (
                <div>
                    <h1>{this.props.filter.title}</h1>
                    <iframe className="preview" src={this.props.filter.src}></iframe>
                </div>
            );
        } else if (!this.props.filter) {
            return (
                <h1>Updating...</h1>
            )
        } else if (this.props.filter && !this.props.filter.src) {
            return (
                <div>
                    <h1>{this.props.filter.title}</h1>
                    {this.props.filter.list.map(data => 
                        <div
                            key={data.key}
                            {...data}>
                            {data.type}
                        </div>
                    )}
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, {filterNow})(SelectedPage);
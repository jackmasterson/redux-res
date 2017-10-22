import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    state: state,
});

class SelectedPage extends Component {
    render() {
        console.log(this);
        return (
            <h1>TEST TEXT</h1>
        );
    }
}

export default connect(mapStateToProps)(SelectedPage);
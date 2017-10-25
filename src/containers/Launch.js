import React, { Component } from 'react';
import { Box } from '../components/Box';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    state: state,
    data: state.data,
    nav: state.nav
});

class Main extends Component {
    render() {
        let keys = Object.keys(this.props.state.data);
        console.log(this.props);
        return (
            <div>
                <div>Jack Masterson</div>
                <div className="box-wrapper flex-wrapper">
                    {this.props.data.nav.map((info) =>
                        <Box 
                            key={info.id}
                            path={info.path}
                            {...info}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main);
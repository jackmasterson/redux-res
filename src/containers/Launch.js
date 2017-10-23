import React, { Component } from 'react';
import { Box } from '../components/Box';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    state: state,
});

class Main extends Component {
    render() {
        let keys = Object.keys(this.props.state.data);

        return (
            <div className="box-wrapper">
                {keys.map((keyed) =>
                    <div
                        key={keyed}
                        className={keyed}>
                        {this.props.state.data[keyed].map((info) =>
                            <Box key={info.id}
                                path={info.path = keyed}
                                {...info}
                            />
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main);
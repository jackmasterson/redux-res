import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '../components/Box';

const mapStateToProps = (state) => ({
    state: state,
    extras: state.data.extras
})

class Extras extends Component {
    render() {
        return (
            <div>
                {this.props.extras.map(info =>
                    <Box
                        key={info.id}
                        {...info}
                    />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Extras);
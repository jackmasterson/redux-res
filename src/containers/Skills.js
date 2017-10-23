import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '../components/Box';

const mapStateToProps = (state) => ({
    state: state,
    skillset: state.data.skillset
})

class Skills extends Component {
    render() {
        return (
            <div>
                {this.props.skillset.map(info =>
                    <Box
                        key={info.id}
                        {...info}
                    />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Skills);
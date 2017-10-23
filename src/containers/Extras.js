import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '../components/Box';

const mapStateToProps = (state) => ({
    state: state,
    extracurriculars: state.data.extracurriculars
})

class Extras extends Component {
    render() {
        return (
            <div>
                {this.props.extracurriculars.map(info =>
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
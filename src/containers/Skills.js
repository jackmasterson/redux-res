import React, { Component } from 'react';
import Launch from '../containers/Launch';
import { requestData } from '../reducers/data';
import { connect } from 'react-redux';
import { Box } from '../components/Box';

const mapStateToProps = (state) => ({
    state: state,
    skills: state.data.skills
})

class Skills extends Component {
    componentDidMount() {
        requestData();
    }
    render() {
        console.log(this);
        return (
            <div>
                {this.props.skills.map(info =>
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
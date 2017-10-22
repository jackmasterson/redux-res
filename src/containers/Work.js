import React, {Component} from 'react';
import Launch from '../containers/Launch';
import { requestData } from '../reducers/data';
import {connect} from 'react-redux';
import {Box} from '../components/Box';

const mapStateToProps= (state) => ({
    state: state,
    works: state.data.works
})

class Work extends Component {
    render() {
        return (
            <div>
                {this.props.works.map(info => 
                    <Box 
                        key={info.id}
                        {...info}
                    />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Work);
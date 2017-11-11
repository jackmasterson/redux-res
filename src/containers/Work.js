import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Box} from '../components/Box';

const mapStateToProps= (state) => ({
    state: state,
    projects: state.data.projects
})

class Work extends Component {
    render() {
        console.log('here: ', this);
        if (this.props.match.isExact) {
            return (
                <div className="box-wrapper">
                    {this.props.projects.map(info =>
                        <Box
                            key={info.id}
                            {...info}
                        />
                    )}
                </div>
            )
        } else {
            let path = this.props.location.pathname.split('/');
            path = path[path.length - 1]
            for (let project of this.props.projects) {
                if (project.class === path && project.src) {
                    console.log(project);
                    return (
                        <div>
                        <div className="box-wrapper">
                            {this.props.projects.map(info =>
                                <Box
                                    key={info.id}
                                    {...info}
                                />
                            )}
                        </div>
                            <div className="project-description">
                                <p>{project.title}</p>
                                <p>{project.description}</p>
                                <a 
                                    target="_blank"
                                    href={project.src}>Click to see</a>
                            </div>
                        </div>
                    )
                } else if (project.class === path && !project.src) {
                    return (
                        <div>
                        <div className="box-wrapper">
                            {this.props.projects.map(info =>
                                <Box
                                    key={info.id}
                                    {...info}
                                />
                            )}
                        </div>
                            <div className="project-description">
                                <div>{project.title}</div>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    )
                }
            }
        }
    }
}

export default connect(mapStateToProps)(Work);
const initialState = {
    nav: [{
        title: 'projects',
        key: 1,
    }, {
        title: 'skillset',
        key: 2,
    },/* {
        title: 'extracurriculars',
        key: 3,
    }*/],
    projects: [{
        title: 'Bus App',
        key: 1,
        class: 'bus-app',
        category: 'projects',
    }, {
        title: 'Bus Web',
        key: 2,
        class: 'bus-website',
        category: 'projects',
    }, {
        title: 'Old Res',
        key: 3,
        class: 'old-resume',
        category: 'projects',
    }, {
        title: 'Data',
        key: 4,
        class: 'basic-data',
        category: 'projects',
        src: 'https://rawgit.com/jackmasterson/nycstats/master/index.html',
    }, {
        title: 'Arcade',
        key: 5,
        class: 'arcade-game',
        category: 'projects',
        src: 'https://cdn.rawgit.com/jackmasterson/canvasArcade/master/app/index.html',
    }, {
        title: 'Mapped',
        key: 6,
        class: 'neighborhood-map',
        category: 'projects',
        src: 'https://rawgit.com/jackmasterson/mapped/master/app/index.html',
    }],
    skillset: [{
        title: 'Languages',
        key: 1,
        class: 'languages',
        category: 'skillset',
        list: [{
            key: 1,
            type: 'javascript',
        }, {
            key: 2, 
            type: 'nodejs', 
        }, {
            key: 3,
            type: 'entry-level python'
        }],
    }, {
        title: 'Libs',
        key: 2,
        class: 'frameworks',
        category: 'skillset',
        list: [{
            key: 1,
            type: 'backbonejs', 
        }, {
            key: 2, 
            type: 'angular 1.0', 
        }, {
            key: 3, 
            type: 'react', 
        }, {
            key: 4, 
            type: 'react-native', 
        }, {
            key: 5,
            type: 'redux'
        }],
    }, {
        title: 'Tools',
        key: 3,
        class: 'build-tools',
        category: 'skillset',
        list: [{
            key: 1,
            type: 'aws', 
        }, {
            key: 2, 
            type: 'gulp', 
        }, {
            key: 3, 
            type: 'webpack', 
        }, {
            key: 4,
            type: 'grunt'
        }],
    }],
    /*extracurriculars: [{
        title: 'Comedy',
        key: 1,
        class: 'comedy',
        category: 'extracurriculars',
    }, {
        title: 'Writing',
        key: 2,
        class: 'writing',
        category: 'extracurriculars',
    }]*/
}

const DATA_REQUESTED = 'DATA_REQUESTED';
const FILTER_APPLIED = 'FILTER_APPLIED';

export const dataRequested = (data) => ({ type: DATA_REQUESTED, payload: data });
export const applyFilter = (data) => ({ type: FILTER_APPLIED, payload: data });

export const requestData = () => {
    return (dispatch) => {
        dispatch(dataRequested(initialState.works));
    }
}

export const filterNow = (info) => {
    return (dispatch) => {
        dispatch(applyFilter(info));
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUESTED:
            return {...state, data: action.payload, filter: '' }
        case FILTER_APPLIED:
            return {...state, data: {...state.data}, filter: action.payload }
        default:
            return state;
    }
}

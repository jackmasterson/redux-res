const initialState = {
    projects: [{
        title: 'Bus App',
        key: 1,
        class: 'bus-app',
        category: 'projects',
    }, {
        title: 'Bus Website',
        key: 2,
        class: 'bus-website',
        category: 'projects',
    }, {
        title: 'Old Resume',
        key: 3,
        class: 'old-resume',
        category: 'projects',
    }, {
        title: 'Basic Data',
        key: 4,
        class: 'basic-data',
        category: 'projects',
    }, {
        title: 'Arcade Game',
        key: 5,
        class: 'arcade-game',
        category: 'projects',
    }],
    skillset: [{
        title: 'Languages',
        key: 1,
        class: 'languages',
        category: 'skillset',
    }, {
        title: 'Frameworks/Libraries',
        key: 2,
        class: 'frameworks',
        category: 'skillset',
    }, {
        title: 'Build Tools',
        key: 3,
        class: 'build-tools',
        category: 'skillset',
    }],
    extracurriculars: [{
        title: 'Comedy',
        key: 1,
        class: 'comedy',
        category: 'extracurriculars',
    }, {
        title: 'Writing',
        key: 2,
        class: 'writing',
        category: 'extracurriculars',
    }]
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

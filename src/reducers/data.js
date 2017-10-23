const initialState = {
    works: [{
        title: 'Bus App',
        key: 1,
        class: 'bus-app'
    }, {
        title: 'Bus Website',
        key: 2,
        class: 'bus-website',
    }, {
        title: 'Old Resume',
        key: 3,
        class: 'old-resume',
    }, {
        title: 'Basic Data',
        key: 4,
        class: 'basic-data',
    }, {
        title: 'Arcade Game',
        key: 5,
        class: 'arcade-game',
    }],
    skills: [{
        title: 'Languages',
        key: 1,
        class: 'languages',
    }, {
        title: 'Frameworks/Libraries',
        key: 2,
        class: 'frameworks'
    }, {
        title: 'Build Tools',
        key: 3,
        class: 'build-tools'
    }],
    extras: [{
        title: 'Comedy',
        key: 1,
        class: 'comedy'
    }, {
        title: 'Writing',
        key: 2,
        class: 'writing'
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

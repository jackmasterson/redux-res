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

export const dataRequested = (data) => ({ action: DATA_REQUESTED, payload: data });

export const requestData = () => {
    return (dispatch) => {
        dispatch(dataRequested(initialState.works));
    }
}

export default (state = initialState, action) => {
    switch (action.stype) {
        case DATA_REQUESTED:
            return {...state, data: action.payload}
        default:
            return state;
    }
}

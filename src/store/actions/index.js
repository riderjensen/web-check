import * as actionTypes from '../actionTypes';

export const getAllTrackers = _ => {
    return (dispatch) => {
        const trackerString = localStorage.getItem('webCheck')
        const trackers = JSON.parse(trackerString)
        console.log(trackers);
        if (trackers != null) {
            dispatch(addNewTrackerDispatching(trackers))
        }
    }
}

export const addNewTracker = trackerObj => {
    return (dispatch, getState) => {
        const currentState = getState();
        const trackers = [...currentState.index.trackers];

        const date = new Date();
        const now = date.getTime()
        trackerObj.id = now;
        trackers.push(trackerObj)

        // add trackers object to local storage here
        const trackersString = JSON.stringify(trackers);
        localStorage.setItem('webCheck', trackersString)

        dispatch(addNewTrackerDispatching(trackers))
    }
}

export const deleteTracker = trackerId => {
    return (dispatch, getState) => {
        const currentState = getState();
        const trackersCopy = [...currentState.index.trackers];
        trackersCopy.forEach((tracker, i) => {
            if (trackerId === tracker.id) {
                trackersCopy.splice(i, 1)
            }
        });
        dispatch(addNewTrackerDispatching(trackersCopy))
    }
}

const addNewTrackerDispatching = payload => ({
    type: actionTypes.ADD_NEW_TRACKER,
    payload
})
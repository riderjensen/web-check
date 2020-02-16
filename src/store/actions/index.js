import * as actionTypes from '../actionTypes';

export const addNewTracker = trackerObj => {
    return (dispatch, getState) => {
        const currentState = getState();
        const trackers = [...currentState.index.trackers];

        const date = new Date();
        const now = date.getTime()
        trackerObj.id = now;
        trackers.push(trackerObj)

        // TODO: add trackers object to local storage here

        dispatch(addNewTrackerDispatching(trackers))
    }
}

const addNewTrackerDispatching = payload => ({
    type: actionTypes.ADD_NEW_TRACKER,
    payload
})
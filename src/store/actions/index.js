import * as actionTypes from '../actionTypes';

export const addNewTracker = trackerObj => {
    return (dispatch, getState) => {
        dispatch(addNewTrackerDispatching(payload))
    }
}

const addNewTrackerDispatching = payload => ({
    type: actionTypes.ADD_NEW_TRACKER,
    payload
})
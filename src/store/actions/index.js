import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const getAllTrackers = _ => {
    return (dispatch) => {
        const trackerString = localStorage.getItem('webCheck')
        const trackers = JSON.parse(trackerString)
        if (trackers != null) {
            // dispatch(addNewTrackerDispatching(trackers))
            kickOffPolling(trackers, dispatch)
        }
    }
}

export const addNewTracker = trackerObj => {
    return (dispatch, getState) => {
        const currentState = getState();
        const trackersCopy = [...currentState.index.trackers];

        const date = new Date();
        const now = date.getTime()
        trackerObj.id = now;
        trackersCopy.push(trackerObj)

        // add trackers object to local storage here
        setCookie(trackersCopy)

        dispatch(addNewTrackerDispatching(trackersCopy))
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
        // add trackers object to local storage here
        setCookie(trackersCopy)
        dispatch(addNewTrackerDispatching(trackersCopy))
    }
}

export const editTracker = trackerObj => {
    return (dispatch, getState) => {
        const currentState = getState();
        const trackersCopy = [...currentState.index.trackers];
        trackersCopy.forEach((tracker, i) => {
            if (trackerObj.id === tracker.id) {
                trackersCopy[i] = trackerObj
            }
        })
        setCookie(trackersCopy)
        dispatch(addNewTrackerDispatching(trackersCopy))
    }
}

const addNewTrackerDispatching = payload => ({
    type: actionTypes.ADD_NEW_TRACKER,
    payload
})

function setCookie(trackers) {
    const trackersString = JSON.stringify(trackers);
    localStorage.setItem('webCheck', trackersString)
}

// kick off polling for each object in the state
function kickOffPolling(trackers, dispatch) {
    trackers.forEach((tracker, i) => {
        const url = encodeURIComponent(tracker.url)
        axios.get(`https://cors-accesser.herokuapp.com/?url=${url}`).then(resp => {
            tracker.error = false
            tracker.achieved = false
            tracker.indicators.forEach(indicator => {
                if(indicator.filter === 'includes') {
                    if(resp.data.includes(indicator.phrase)) {
                        tracker.achieved = true
                    }
                } else if (indicator.filter === '!includes') {
                    if(!resp.data.includes(indicator.phrase)) {
                        tracker.achieved = true
                    }
                }
            })
            dispatch(addNewTrackerDispatching(trackers))
        }).catch(err => {
            tracker.error = true
            dispatch(addNewTrackerDispatching(trackers))
        })
    })
}
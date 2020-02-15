import * as actionTypes from '../actionTypes';

const initialState = {
	trackers: []
  }
  
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_NEW_TRACKER:
			return {...state, trackers: action.payload}
		default:
			return state;
	}
}
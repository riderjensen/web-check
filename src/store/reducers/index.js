import * as actionTypes from '../actionTypes';

const initialState = {
	items: []
  }
  
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_NEW_TRACKER:
			return {...state, items: action.payload}
		default:
			return state;
	}
}
import * as actionTypes from '../actionTypes';

const initialState = {
	trackers: [
		{
			id: 1,
			title: "My title",
			url: 'https://google.com',
			timeout: 10,
			indicators: [

			]
		},
		{
			id: 2,
			title: "BestBuy Switch",
			url: 'https://google.com',
			timeout: 10,
			indicators: [
				
			]
		},
	]
  }
  
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_NEW_TRACKER:
			return {...state, trackers: action.payload}
		default:
			return state;
	}
}
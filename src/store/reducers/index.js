import * as actionTypes from '../actionTypes';

const initialState = {
	trackers: [
		{
			id: 1,
			title: "Rider Jensen Website",
			url: 'https://riderjensen.com',
			timeout: 60,
			indicators: [
				{
					id: 12,
					filter: 'includes',
					phrase: 'human touch'
				}

			],
			achieved: false,
			error: false
		},
		{
			id: 2,
			title: "Wikipedia Web",
			url: 'https://en.wikipedia.org/wiki/Web_development',
			timeout: 50,
			indicators: [
				{
					id: 12,
					filter: 'includes',
					phrase: 'french fries'
				}
			],
			achieved: false,
			error: false
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
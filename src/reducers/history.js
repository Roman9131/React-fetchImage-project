import * as types from '../constants';

const initialState = [];

export default function history (state = initialState, action) {
	debugger
	switch (action.type) {
		case types.ADD_ITEM_TO_HISTORY:
			return [...state, action.item];

		case types.DELETE_ITEM_FROM_HISTORY:
			return [ ...action.filteredHistory ];

		default:
			return state;
	}
}

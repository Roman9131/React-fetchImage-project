import * as types from '../constants';

export function addItemToHistory(item) {
	return {
		type: types.ADD_ITEM_TO_HISTORY,
		item,
	};
}

export function deleteItemFromHistory(filteredHistory) {
	return {
		type: types.DELETE_ITEM_FROM_HISTORY,
		...filteredHistory,
	};
}

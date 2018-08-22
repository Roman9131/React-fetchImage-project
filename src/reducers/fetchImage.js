import * as types from '../constants';

const initialState = {};

export default function fetchImage(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_IMAGE_SUCCESS:
			const { title, id, image_url: imageUrl } = action.result.data;
			const newState = { id, title, imageUrl };

			return { ...state, ...newState };

		default:
			return state;
	}
}

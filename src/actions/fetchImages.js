import * as types from '../constants';

export function fetchImages(values) {
	return {
		type: types.FETCH_IMAGE,
		values,
	};
}

export function fetchImagesSuccess(result) {
	return {
		type: types.FETCH_IMAGE_SUCCESS,
		result,
	};
}

export function fetchImagesError(error) {
	return {
		type: types.FETCH_IMAGE_ERROR,
		error,
	};
}


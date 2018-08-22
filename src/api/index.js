const API_DATA_URL = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';

export const fetchImages = () => {
	return fetch(API_DATA_URL).then(response => {
		return response.json()
	});
};

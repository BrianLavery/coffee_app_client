import axios from 'axios';

const api = axios.create({});

// Use below code so that when we get a 401 error when signin with incorrect credentials it does not go to catch statement
// https://stackoverflow.com/questions/47216452/how-to-handle-401-authentication-error-in-axios-and-react
api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// console.log('this means we have got an axios error');
		const { status } = error.response;
		if (status === 401 || status === 422 || status === 404 || status === 304) {
			return error.response;
		}
		return error;
	}
);

export default api;

import axios from 'axios';

const GET = (url, params, headers = {}) => {
	return axios({
		url,
		headers: {
			...headers,
		},
		params
	});
};

const POST = (url, data, headers = {}, restConfig) => {
	return axios({
		method: 'POST',
		url,
		headers: {
			...headers,
		},
		data,
		...restConfig,
	});
};

export {
	GET,
	POST
};

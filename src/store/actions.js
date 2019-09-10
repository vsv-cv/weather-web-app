import {
	FETCH_WEATHER_DATA,
	CHANGE_UNIT_FORMAT
} from './consts'
import { getWeatherInfo } from "../api";

const fetchWeatherDataAction = (data) => {
	return { type: FETCH_WEATHER_DATA, payload: data }
};

export const fetchWeatherData = () => {
	return (dispatch, getState) => {
		const { unitFormat } = getState();

		return getWeatherInfo(unitFormat).then(
			({ data }) => {
				const date = new Date().toLocaleString();

				dispatch(fetchWeatherDataAction({ data, date }));

				localStorage.setItem('weatherData', JSON.stringify(data));
				localStorage.setItem('lastWeatherUpdate', date)
			},
			error => console.error(error)
		);
	};
};

const toggleUnitFormatAction = (unitFormat) => {
	return { type: CHANGE_UNIT_FORMAT, payload: unitFormat }
};

export const toggleUnitFormat =  (unitFormat) => dispatch => {
	dispatch(toggleUnitFormatAction(unitFormat));
};

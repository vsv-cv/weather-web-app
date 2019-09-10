import {
	FETCH_WEATHER_DATA,
	CHANGE_UNIT_FORMAT
} from './consts'

export default function weaterApp (state = {}, action) {
	switch (action.type) {
		case FETCH_WEATHER_DATA:
			return {
				...state,
				data: action.payload
			};
		case CHANGE_UNIT_FORMAT:
			return {
				...state,
				unitFormat: action.payload
			};
		default:
			return state
	}
}

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers'

const middlewares = [
	thunkMiddleware,
	createLogger({
		collapsed: true
	}),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	unitFormat: 'c',
	lastWeatherUpdate: null,
	data: {
		location: {},
		forecasts: []
	}
};
const localWeatherData = localStorage.getItem('weatherData');
const localLastWeatherUpdate = localStorage.getItem('lastWeatherUpdate');

if (localWeatherData) {
	initialState.data = JSON.parse(localWeatherData);
}

if (localLastWeatherUpdate) {
	initialState.lastWeatherUpdate = localLastWeatherUpdate;
}

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

export default store;

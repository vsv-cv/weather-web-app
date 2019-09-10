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
	data: {
		location: {},
		forecasts: []
	}
};
const localData = localStorage.getItem('weatherData');

if (localData) {
	initialState.data = JSON.parse(localData);
}

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

export default store;

import React, { Component } from 'react';
import WeatherCards from "../../components/WeatherCards";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../../store/actions'
import {
	selectWeatherData,
	selectUnitFormat
} from '../../store/selectors'

export const mapState = (state) => ({
	weatherData: selectWeatherData(state),
	unitFormat: selectUnitFormat(state)
});

export const mapDispatch = dispatch => {
	return {
		...bindActionCreators({
			fetchWeatherData
		}, dispatch)
	};
};

class Home extends Component {
	componentDidMount () {
		this.props.fetchWeatherData();
	}

	render () {
		const {
			weatherData,
			unitFormat
		} = this.props;
		const {
			location,
			forecasts
		} = weatherData;
		console.log('weatherData', this.props.weatherData);

		return (
			<>
				<h1>Weather at <strong>{location.city}</strong></h1>
				<WeatherCards
					forecasts={forecasts}
					unitFormat={unitFormat.toUpperCase()}
				/>
			</>
		);
	}
};

export const HomeConnected = connect(mapState, mapDispatch)(Home);

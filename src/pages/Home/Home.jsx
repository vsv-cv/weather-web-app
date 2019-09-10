import React, { Component } from 'react';
import WeatherCards from "../../components/WeatherCards";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherData } from '../../store/actions'
import {
	selectWeatherData,
	selectUnitFormat,
	selectLastWeatherUpdate
} from '../../store/selectors'

export const mapState = (state) => ({
	weatherData: selectWeatherData(state),
	unitFormat: selectUnitFormat(state),
	lastWeatherUpdate: selectLastWeatherUpdate(state)
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

	handleUpdateButtonClick = () => {
		this.props.fetchWeatherData();
	};

	render () {
		const {
			weatherData,
			unitFormat,
			lastWeatherUpdate
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
				<div>Last update: {lastWeatherUpdate}</div>
				<div>
					<Button
						variant="success"
						onClick={this.handleUpdateButtonClick}
					>
						Update
					</Button>
				</div>
			</>
		);
	}
};

export const HomeConnected = connect(mapState, mapDispatch)(Home);

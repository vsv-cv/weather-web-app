import React from 'react';
import { CardDeck } from 'react-bootstrap';
import WeatherCard from '../WeatherCard'
import './WeatherCards.css';

export const WeatherCards = ({
	forecasts,
	unitFormat
}) => {
	return (
		<CardDeck className="WeatherCards">
			{forecasts.map(item => {
				const date = new Date(item.date * 1000).toDateString().split(' ')
				return <WeatherCard
					key={item.date}
					dayName={date[0]}
					mounceName={date[1]}
					dayOfMounce={date[2]}
					highTemp={item.high}
					lowTemp={item.low}
					weather={item.text}
					unitFormat={unitFormat}
				/>
			})}
		</CardDeck>
	);
};

import React from 'react';
import { Card } from 'react-bootstrap';
import './WeatherCard.css';

export const WeatherCard = ({
	dayName,
	mounceName,
	dayOfMounce,
	highTemp,
	lowTemp,
	weather,
	unitFormat
}) => {
	return (
		<div>
			<Card border="info" className="WeatherCard">
				<Card.Header className="WeatherCard-header">
					<Card.Title>High: {highTemp}°{unitFormat}</Card.Title>
					<Card.Title>Low: {lowTemp}°{unitFormat}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{weather}</Card.Subtitle>
				</Card.Header>
				<Card.Body>
					<Card.Text>{dayName} <br /> {dayOfMounce} {mounceName}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

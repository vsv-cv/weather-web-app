import React from 'react';
import {
	ButtonGroup,
	Button
} from 'react-bootstrap';
import './Settings.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleUnitFormat } from '../../store/actions'
import { selectUnitFormat } from '../../store/selectors'

const mapState = (state) => ({
	activeUnitFormat: selectUnitFormat(state)
});

const mapDispatch = dispatch => {
	return {
		...bindActionCreators({
			toggleUnitFormat
		}, dispatch)
	};
};

const Settings = ({
  activeUnitFormat,
  toggleUnitFormat
}) => {
	const handleChangeUnitFormatButtonClick = (unitFormat) => {
		activeUnitFormat !== unitFormat && toggleUnitFormat(unitFormat)
	};

	const handleResetCacheButtonClick = () => {
		localStorage.removeItem('weatherData');
		localStorage.removeItem('lastWeatherUpdate');
		localStorage.removeItem('unitFormat');
	};

	const isCelsiusIsActiveUnitFormat = activeUnitFormat === 'c';

	return (
		<>
			<div className="Settings">
				<div><strong>Utils</strong></div>
				<ButtonGroup aria-label="Basic example">
					<Button
						variant={isCelsiusIsActiveUnitFormat ? 'primary' : 'secondary'}
						onClick={() => handleChangeUnitFormatButtonClick('c')}
					>
						C
					</Button>
					<Button
						variant={isCelsiusIsActiveUnitFormat ? 'secondary' : 'primary'}
						onClick={() => handleChangeUnitFormatButtonClick('f')}
					>
						F
					</Button>
				</ButtonGroup>
			</div>
			<div className="Settings">
				<div><strong>System settings</strong></div>
				<Button
					variant="danger"
					onClick={handleResetCacheButtonClick}
				>
					Reset Cache
				</Button>
			</div>
		</>
	);
};

export const SettingsConnected = connect(mapState, mapDispatch)(Settings);

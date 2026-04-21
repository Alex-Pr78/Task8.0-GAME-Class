import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';
import { selectCurrentPlayer, selectIsGameEnded, selectIsDraw } from '../../selectors';

export class InformationContainer extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;

		let message = '';

		if (isDraw) {
			message = 'Ничья';
		} else if (isGameEnded) {
			message = `Победа: ${currentPlayer}`;
		} else {
			message = `Ходит: ${currentPlayer}`;
		}

		return <InformationLayout message={message} />;
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
	isDraw: selectIsDraw(state),
})

export const information = connect(mapStateToProps)(InformationContainer);

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
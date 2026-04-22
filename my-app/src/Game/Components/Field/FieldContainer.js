import { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS, PLAYER, STATUS } from '../../../Game/constants';
import { connect } from 'react-redux';
import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../../Game/selectors';
import {
	setField,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
} from '../../../Game/actions';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);
		this.handleCellClick = this.handleCellClick.bind(this);
	}

	checkWinner(field) {
		return WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	}

	handleCellClick(index) {
		const { currentPlayer, isGameEnded, isDraw, field, dispatch } = this.props;
		if (isGameEnded || isDraw) return;
		if (field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));

		if (this.checkWinner(newField)) {
			dispatch(setIsGameEnded(STATUS.WIN));
			return;
		}

		if (newField.every((cell) => cell !== '')) {
			dispatch(setIsDraw(true));
			return;
		}

		dispatch(
			setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS),
		);
	}

	render() {
		return (
			<FieldLayout field={this.props.field} handleCellClick={this.handleCellClick} />
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	isGameEnded: selectIsGameEnded(state),
	isDraw: selectIsDraw(state),
	field: selectField(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
	dispatch: PropTypes.func.isRequired,
};

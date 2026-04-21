import { FieldLayout } from './FieldLayout';
import { WIN_PATTERNS, PLAYER, STATUS } from '../../../Game/constants';
import { useDispatch, useSelector } from 'react-redux';
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

export const FieldContainer = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);
	const field = useSelector(selectField);
	const dispatch = useDispatch();

	function checkWinner(field) {
		return WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	}

	function handleCellClick(index) {
		if (isGameEnded || isDraw) return;
		if (field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));

		if (checkWinner(newField)) {
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

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

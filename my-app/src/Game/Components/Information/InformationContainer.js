
import { useSelector } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import {
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../../selectors';


export const InformationContainer = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	let message = '';

	if (isDraw) {
		message = 'Ничья';
	} else if (isGameEnded) {
		message = `Победа: ${currentPlayer}`;
	} else {
		message = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout message={message} />;
};

import { GameLayout } from './GameLayout';
import { useDispatch } from 'react-redux';
import { RESTART_GAME } from './actions';

export const Game = () => {
	const dispatch = useDispatch();


		function restartGame() {
			dispatch(RESTART_GAME);
		}

	return (
		<GameLayout restartGame={restartGame}/>
	);
};

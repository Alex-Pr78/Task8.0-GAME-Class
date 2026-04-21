import { Component } from 'react';
import PropTypes from 'prop-types';
import { GameLayout } from './GameLayout';
import { connect } from 'react-redux';
import { RESTART_GAME } from './actions';

export class GameContainer extends Component {
	render() {
		return <GameLayout restartGame={this.props.restartGame} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	restartGame: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);

GameContainer.propTypes = {
	restartGame: PropTypes.func.isRequired,
};

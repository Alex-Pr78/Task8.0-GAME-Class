import { Component } from 'react';
import PropTypes from 'prop-types';
import { GameLayout } from './GameLayout';
import { connect } from 'react-redux';
import { restartGame } from './actions';

export class GameContainer extends Component {
	render() {
		return <GameLayout handleRestart={this.props.handleRestart} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleRestart: () => dispatch(restartGame()),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);

GameContainer.propTypes = {
	handleRestart: PropTypes.func.isRequired,
};

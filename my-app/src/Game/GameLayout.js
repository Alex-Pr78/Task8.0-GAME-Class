import { Component } from 'react';
import PropTypes from 'prop-types';
import { Information } from './Components/Information';
import { Field } from './Components/Field';

import styles from './GameLayout.module.css';

export class GameLayout extends Component {
	render() {

		return (
			<div className={styles.game}>
				<Information />
				<Field />
				<button className={styles.restartBtn} onClick={this.props.handleRestart}>
					Начать заново
				</button>
			</div>
		);
	}
}

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};

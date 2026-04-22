import { Component } from 'react';
import { InformationContainer } from './Components/Information/InformationContainer';
import { FieldContainer } from './Components/Field/FieldContainer';

import styles from './GameLayout.module.css';

export class GameLayout extends Component {
	render() {

		return (
			<div className={styles.game}>
				<InformationContainer />
				<FieldContainer />
				<button className={styles.restartBtn} onClick={this.props.restartGame}>
					Начать заново
				</button>
			</div>
		);
	}
}

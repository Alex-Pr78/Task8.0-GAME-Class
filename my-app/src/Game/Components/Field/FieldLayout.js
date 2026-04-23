import { Component } from 'react';
import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import styles from './FieldLayout.module.css';
export class FieldLayout extends Component {
	render() {
		const { field, handleCellClick } = this.props;

		return (
			<div className={styles.field}>
				{ field.map((cellPlayer, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => handleCellClick(index)}
						disabled={cellPlayer !== PLAYER.NOBODY}
						type="button"
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))),
	handleCellClick: PropTypes.func,
}

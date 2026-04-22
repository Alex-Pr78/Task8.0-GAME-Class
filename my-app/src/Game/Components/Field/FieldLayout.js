import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';

export class FieldLayout extends Component {
	render() {
		const { field, handleCellClick } = this.props;

		return (
			<div className={styles.field}>
				{field.map((cell, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => handleCellClick(index)}
						disabled={cell !== ''}
						type="button"
					>
						{cell}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values('X', 'O'))).isRequired,
	handleCellClick: PropTypes.func.isRequired,
}

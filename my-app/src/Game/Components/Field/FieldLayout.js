import { Component } from 'react';
import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
export class FieldLayout extends Component {
	render() {
		const { field, handleCellClick } = this.props;

		return (
			<div className="grid grid-cols-[repeat(3,80px)] grid-rows-[repeat(3,80px)] gap-2">
				{field.map((cellPlayer, index) => (
					<button
						key={index}
						className="text-2xl font-bold cursor-pointer bg-gray-200 border-2 border-black rounded-md transition-colors duration-200 ease-in-out disabled:cursor-default disabled:bg-gray-300 disabled:text-gray-500"
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
};

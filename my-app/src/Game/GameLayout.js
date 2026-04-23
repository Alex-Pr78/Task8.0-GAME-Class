import { Component } from 'react';
import PropTypes from 'prop-types';
import { Information } from './Components/Information';
import { Field } from './Components/Field';
export class GameLayout extends Component {
	render() {

		return (
			<div className="flex flex-col items-center gap-4 mt-8 font-sans">
				<Information />
				<Field />
				<button className="bg-red-700 p-2 rounded-lg text-white" onClick={this.props.handleRestart}>
					Начать заново
				</button>
			</div>
		);
	}
}

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};

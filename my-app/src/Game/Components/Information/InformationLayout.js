import { Component } from 'react';
import PropTypes from 'prop-types';
export class InformationLayout extends Component {
	render() {
		return (
			<div className="text-red-700 text-2xl font-semibold ">{this.props.information}</div>
		);
	}
}

InformationLayout.propTypes = {
	information: PropTypes.string,
};

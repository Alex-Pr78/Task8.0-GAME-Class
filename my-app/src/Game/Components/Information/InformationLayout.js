import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';

export class InformationLayout extends Component {
	render() {
		return (
			<div className={styles.info}>{this.props.message}</div>
		);
	}
}

InformationLayout.propTypes = {
	message: PropTypes.string.isRequired,
};

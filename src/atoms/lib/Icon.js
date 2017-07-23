import React, { Component } from "react";
import PropTypes from "prop-types";

import icons from "../../assets/icons";

export default class Icon extends Component {

	render() {
		const { type, clickAction, id, className } = this.props;
		return (
			<svg id={id} onClick={clickAction} className={`icon ${className}`}>
				{icons[type]}
			</svg>
		);
	}
}

Icon.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string,
	className: PropTypes.string,
	clickAction: PropTypes.func
};
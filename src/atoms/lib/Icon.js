import React, { Component } from "react";
import PropTypes from "prop-types";

import { icons } from "../../models/index";

export default class Icon extends Component {

	render() {
		const { className, type, clickAction } = this.props;

		return (
			<img src={icons[type]} onCLick={clickAction} className={`Icon ${className}`}/>
		);
	}
}

Icon.propTypes = {
	type: PropTypes.string.isRequired
};

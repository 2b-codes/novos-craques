import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputDate extends Component {

	render() {
		const{ onClick, value, className }=this.props;
		return(
			 <input type="date" onClick={onClick} className={`date ${className}`} value={value}/>
		);
	}
}

InputDate.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.func.isRequired,
	className: PropTypes.isRequired
};
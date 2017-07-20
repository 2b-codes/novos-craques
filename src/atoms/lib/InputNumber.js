import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputNumber extends Component {

	render() {
		const{ onChange, id, value, className, placeholder }= this.props;
		return(
			<input 
				type="number" 
				className={`input-number ${className}`} 
				id={id} 
				value={value} 
				onChange={onChange}
				placeholder={placeholder}
			/> 
		);
	}
}

InputNumber.propTypes = {
	onChange: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};
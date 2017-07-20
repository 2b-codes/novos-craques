import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputCpf extends Component {

	render() {
		const{ id, value, onChange, className, placeholder } = this.props;
		return(
			<input 
				type="text"
				value={value}
				id={id}
				className={`input-cpf ${className}`}
				onChange={ this.SPMaskBehavior }
				placeholder={placeholder}
			/>
		);
	}
}

InputCpf.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};
import React, { Component } from "react";
import PropTypes from "prop-types";


export default class InputCep extends Component {

	render() {

		const{ className, id,  value, onChange, placeholder }=this.props;
		return( 
			<input 
				type="text"
				className={`input-cep ${className}`}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		);
	}
}
InputCep.propTypes = {

	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	
};
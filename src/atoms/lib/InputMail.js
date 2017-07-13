import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputMail extends Component{

	render(){
		const{className, onChange, value, id}=this.props;
		return(
			<input
				type="text"
				className={`input-mail ${className}`}
				onChange={ onChange }
				value={ value }
				id={ id }
				placeholder="exemplo@exemplo.com"
			/>
		);
	}
}

InputMail.PropTypes={

	className: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
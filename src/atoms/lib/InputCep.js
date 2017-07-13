import React, { Component } from "react";
import PropTypes from "prop-types";


export default class InputCep extends Component{


	render(){

		const{ className, id,  value, onChange }=this.props;
		return( 
			<input 
				type="text"
				className={`input-cep ${className}`}
				id={ id }
				value=""
				onChange={ onChange }
				placeholder="000000-000"
			/>
		);
	}
}
InputCep.PropTypes={

	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
	
};
import React, { Component } from "react";
import PropTypes from "prop-types";


export default class InputCpf extends Component{

	render(){
		const{value,onChange,className}=this.props;
		return(
			<input 
				type="text"
				value={""}
				className={`input-cpf ${className}`}
				onChange={ onChange }
				placeholder="000000000-00"
			/>
		);
	}
}

InputCpf.PropTypes={

	value: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
	
};
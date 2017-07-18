import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputNumber extends Component{

	masc(){
		v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
	    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
	    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    	return v;
		


	}

	render(){
		const{ onChange, id, value, className }= this.props;
		return(
			<input 
				type="number" 
				className={`input-number ${className}`} 
				id={ id } 
				value={value} 
				onChange={ this.masc }
				placeholder="(11) 0000-0000"
			/> 
		);
	}
}

InputNumber.PropTypes={
	onChange: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};
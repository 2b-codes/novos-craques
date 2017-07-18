import React, { Component } from "react";
import PropTypes from "prop-types";

var SPMaskBehavior = function (val) {
	  return val.replace(/\D/g, "").length === 11 ? "(00) 00000-0000" : "(00) 0000-00009";
	},
	spOptions = {
  		onKeyPress: function(val, e, field, options) {
      	field.mask(SPMaskBehavior.apply({}, arguments), options);
    	}
	};

export default class InputCpf extends Component{


	render(){
		const{ value, onChange, className }=this.props;
		return(
			<input 
				type="text"
				value={value}
				className={`input-cpf ${className}`}
				onChange={ this.SPMaskBehavior }
				placeholder="000000000-00"
			/>
		);
	}
}

InputCpf.PropTypes={

	className: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	
};
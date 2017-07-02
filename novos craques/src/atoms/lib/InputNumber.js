import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputNumber extends Component{

	render(){

		const{ onChange, id}= this.props;
		return(

				<input type="number" className="input-number" id={ id } value={value} onChange={ onChange }/> 

		);

	}
}

InputNumber.PropTypes={

	onChange: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	valeu: PropTypes.string.isRequired,

};
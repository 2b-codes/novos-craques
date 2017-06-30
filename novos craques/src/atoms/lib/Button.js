import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component{

	render (){

		const{ children, clickAction }= this.props;
		return (
			<button className="button" onClick={ clickAction }> { children }</button>

		);
	}

}


Button.propTypes={
	// especifica qual o valor espera para tratativa
	children: PropTypes.string.isRequired,
	
	clickAction: PropTypes.func.isRequired,
};


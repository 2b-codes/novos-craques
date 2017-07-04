import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component{

	render (){

		const{ children, clickAction, className } = this.props;
		return (
			<button className={`button ${className}`} onClick={clickAction}>{children}</button>
		);
	}
}


Button.propTypes={
	// especifica qual o valor espera para tratativa
	children: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	clickAction: PropTypes.func.isRequired,
};


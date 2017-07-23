import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {

	render() {

		const{ children, onClick, className, id, type } = this.props;
		return (
			<button id={id} type={type} className={`button ${className}`} onClick={onClick}>{children}</button>
		);
	}
}



Button.propTypes = {
	// especifica qual o valor espera para tratativa
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	type: PropTypes.string,
};


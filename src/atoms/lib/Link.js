import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Link extends Component{

	render (){

		const{ children, url, className } = this.props;
		return (
			<a className={`link ${className}`} href={url}>{children}</a>
		);
	}
}


Link.propTypes={
	// especifica qual o valor espera para tratativa
	children: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	url: PropTypes.func.isRequired,
};


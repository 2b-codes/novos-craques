import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TitlePage extends Component{

	renderTitle() {
		const { type, children, className } = this.props;
		switch(type) {
			
			case h2: return <h2 className={`title-page ${className}`}>{children}</h2>;
			case h3: return <h3 className={`title-page ${className}`}>{children}</h3>;
			
			default: return <h1 className={`title-page ${className}`}>{children}</h1>;
		}
	}

	render (){

		const{ children, clickAction, className } = this.props;
		return (this.renderTitle());
	}
}


TitlePage.propTypes={
	children: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};



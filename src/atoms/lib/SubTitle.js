import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SubTitle extends Component{

	renderSubTitle() {
		const { type, children, className } = this.props;
		switch(type) {
			
			case h5: return <h5 className={`subtitle-page ${className}`}>{children}</h5>;
			case h6: return <h6 className={`subtitle-page ${className}`}>{children}</h6>;
			
			default: return <h4 className={`subtitle-page ${className}`}>{children}</h4>;
		}
	}

	render (){

		const{ children, clickAction, className } = this.props;
		return (this.renderSubTitle());
	}
}


SubTitle.propTypes={
	children: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};



import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Video extends Component {

	render() {
		const{src, className, id, onClick}=this.props;
		return(
			<video 
				src={src}
				className={`video ${className}`}
				id={id}
				onClick={clickAction}
			/>
		);
	}
}

Video.PropTypes = {
	src: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
};
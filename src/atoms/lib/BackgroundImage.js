import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BackgroundImage extends Component {

	render() {
		const{ src, className, id }= this.props;
		return(
			<img
				src={src}
				className={`back-image ${className}`}
				id={id}
			/>
		);
	}
}

BackgroundImage.propTypes = {	
	src: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	id: PropTypes.string

};
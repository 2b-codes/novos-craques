import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BackImage extends Component {

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

BackImage.propTypes = {	
	src: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	id: PropTypes.string

};
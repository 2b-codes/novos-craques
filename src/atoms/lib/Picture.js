import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Picture extends Component {

	render() {
		const{ src, onClick, className, id }=this.props;
		return(
			<img 
				src={src}
				onClick={onClick}
				className={`picture ${className}`}
				id={id}
			/>
		);
	}
}

Picture.PropTypes={
	src: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};
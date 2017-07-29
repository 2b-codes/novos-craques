import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Picture extends Component {

	render() {
		const{ src, onClick, className, id }=this.props;
		return(
			<div className="box-picture">
			<img 
				src={src}
				onClick={onClick}
				className={`picture ${className}`}
				id={id}
			/>
			</div>
		);
	}
}

Picture.propTypes = {
	src: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};
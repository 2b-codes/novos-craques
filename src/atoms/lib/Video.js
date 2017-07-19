import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Video extends Component{

	render(){
		const{src, className, id, onClick}=this.props;
		return(
			<video 
				src="https://youtu.be/ckZtj9kMFm4"
				className={`video ${className}`}
				id="id"
				onClick={ clickAction }
				/>
		);
	}
}

Video.PropTypes={
	src: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
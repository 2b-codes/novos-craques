import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Video extends Component{

	render(){
		const{src, className, id, onClick}=this.props;
		return(
			<video 
				className={`video ${className}`}
				onClick={ clickAction } >

				<source src="https://youtu.be/GrYFE9ZlVAU" type="vide/mp4"/>
				<source src="https://youtu.be/GrYFE9ZlVAU" type="video/ogg"/>
		
  			</video>
		);
	}
}

Video.PropTypes={
	src: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
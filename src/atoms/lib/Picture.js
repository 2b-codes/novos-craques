import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Picture extends Component{

	render(){
		const{ src, onclick, className }=this.props;
		return(
			<img 
				src="http://tophdimgs.com/data_images/wallpapers/12/366872-diego-armando-maradona.jpg"
				onclick=""
				className={`picture ${className}`}
			/>
		);
	}
}

Picture.PropTypes={
	src: PropTypes.string,
	onclick: PropTypes.func,
};
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Picture extends Component{

	render(){
		const{ src, onclick, className }=this.props;
		return(
			<img 
				src="https://ep01.epimg.net/verne/imagenes/2017/02/07/articulo/1486460356_768109_1486460432_noticia_normal.jpg"
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
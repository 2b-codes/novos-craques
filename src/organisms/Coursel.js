import React, { Component } from "react";
import PropTypes from "prop-types";
import { Subtitle, Picture } from "../../atoms";



export default class Coursel extends Component{

	render(){
		const{ src, className, onClick,placeholder , id, text, subtitle, value}=this.props;
		return(
			<div className="coursel">
				<Icon></Icon>

			</div>
		);
	}
}
Coursel.PropTypes={

	src: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string.isRequired,
	children : PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	text:  PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Subtitle, Picture } from "../../atoms";



export default class CardDepoiment extends Component{

	render(){
		const{ src, className, onClick,placeholder , id, text, subtitle, value}=this.props;
		return(
				
			<div className={`card-depoiment ${className}`}>
				
				<Picture
					src={ src }
					onClick={ onClick }
					className={"image"}

				/>				

				<div className="card-text">
					<Subtitle 
						className={"subtitle"}
						id={ id }
						children={ subtitle }
						value={ value }
					/>

					<div className={"depoiment-text"}>

						{ text }
					</div>
				</div>
				
				
			</div>		
		);
	}
}
CardDepoiment.PropTypes={

	src: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string.isRequired,
	children : PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	text:  PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

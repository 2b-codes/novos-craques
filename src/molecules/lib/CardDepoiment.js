import React, { Component } from "react";
import PropTypes from "prop-types";
import { Subtitle, Picture } from "../../atoms";

export default class CardDepoiment extends Component{

	render(){
		const {
			src,
			className,
			onClick,
			id,
			text,
			subtitle,
			alt,
			date
		} = this.props;

		return(
			<div className={`card-depoiment ${className}`}>
				<Picture
					src={src}
					onClick={onClick}
					className="image"
					alt={alt}
				/>				
				<div className="card-text">
					<Subtitle 
						className="subtitle"
						id={id}
						children={subtitle}
					/>
					<Subtitle 
						className="date"
						id={id}
						children={`data: ${date}`}
					/>
					<div className="depoiment-text">
						{text}
					</div>
				</div>
			</div>		
		);
	}
}

CardDepoiment.PropTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string.isRequired,
	children : PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	text:  PropTypes.string.isRequired,
};

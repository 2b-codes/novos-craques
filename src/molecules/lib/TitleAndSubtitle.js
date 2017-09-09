import React, { Component } from "react";
import PropTypes from "prop-types";
import { Title, Subtitle } from "../../atoms";


export default class TitleAndSubtitle extends Component{

	render(){
		const{id, className, value,subtitle, title }= this.props;
		return(
			<div className="titleAndSubtitle">
				<Title 
					className={ `title ${ className }` }
					value={ "teste" }
					id={ id }
					children={title}
				/>
				<div className="sub">
					<Subtitle
						children={subtitle}
						className={"subtitle"}
						
					/>
					</div>
			</div>
		);
	}
}

TitleAndSubtitle.PropTypes={
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
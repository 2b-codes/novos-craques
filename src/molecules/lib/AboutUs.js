import React, { Component } from "react";
import PropTypes from "prop-types";
import {SubTitle, TitlePage} from "../../atoms";


export default class AboutUs extends Component{

	render(){
		const{className, id, subtitle, text}=this.props;
		return(
			<div className={`aboutUs ${ className }`}>
						
				<SubTitle 
					className={ "subtitle" }
					children={ subtitle }
					id={ "subAbout" }
				/>
				<p className= "aboutUS-text">
					{ text }
				</p>
					
			</div>

		);
	}
}

AboutUs.PropTypes={
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string. isRequired,
	subtitle: PropTypes.string. isRequired
};

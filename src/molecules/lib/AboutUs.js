import React, { Component } from "react";
import PropTypes from "prop-types";
import {SubTitle, TitlePage} from "../../atoms";


export default class AboutUs extends Component{

	render(){
		const{className, id, subtitle, text, value}=this.props;
		return(
			<div className={`aboutUs ${ className }`}>
						
				<SubTitle 
					className={ `quem-somos ${ className }`}
					children={ subtitle }
					id={ "subAbout" }
					value={ "Quem Somos" }
				/>
				<p className= {`text ${ className }`}>
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
	subtitle: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

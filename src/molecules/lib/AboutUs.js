import React, { Component } from "react";
import PropTypes from "prop-types";
import { Subtitle } from "../../atoms";

export default class AboutUs extends Component {

	render() {
		const { className, id, subtitle, text, value } = this.props;
		return(
			<div className={`aboutUs ${ className }`}>
				<Subtitle 
					className="quem-somos"
					id="subAbout"
					value="Quem Somos"
				>
					{subtitle}
				</Subtitle>
				<p className= {`text ${className}`}>
					{text}
				</p>
			</div>
		);
	}
}

AboutUs.PropTypes={
	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

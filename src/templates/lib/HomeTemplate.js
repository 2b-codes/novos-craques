import React, { Component } from "react";
import PropTypes from "prop-types";
import { AboutUs, CardMotivation, CardDepoiment } from "../../molecules";
import { Coursel } from "../../organisms";
import { Subtitle, Title, Icon } from "../../atoms";

export default class HomeTemplate extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render(){
		const {className, learnMoreAction} = this.props;

		return(
			<div className={`home-template ${className}`}>
				<div className="back-image">
					<div className="basic-information">
						<Title id="home-title" className="home-title">Novos Craques</Title>
						<Subtitle id="home-subtitle" className="home-subtitle">A evolução do seu sonho!</Subtitle>
					</div>
					<a href="#aboutUsContainer" className="about-us">
						<div className="more-information" onClick={learnMoreAction}>
							<div><span className="learn-more">Saiba Mais</span></div>
							<span className="learn-more"><Icon type="downArrowWhite"/></span>
						</div>
					</a>
				</div>
			</div>
		);
	}
}

HomeTemplate.PropTypes = {
	learnMoreAction: PropTypes.func.isRequired,
	className: PropTypes.string
};

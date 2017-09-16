import React, { Component } from "react";
import PropTypes from "prop-types";
import { AboutUs, CardMotivation, CardDepoiment } from "../../molecules";
import { Coursel } from "../../organisms";
import { Subtitle } from "../../atoms";

export default class Informations extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	renderCardMotivation() {
		return this.props.motivations.map(item =>
			<CardMotivation 
				className="informations-card-motivation"
				key={item.id}
				id={item.id}
				src={item.src}
				text={item.text}
				subtitle={item.subtitle}
				onClick={item.onClick}
			/>
		);
	}

	renderCardDepoiment() {
		return this.props.depoiments.map((depoiment, i) =>
			<CardDepoiment
				key={depoiment.id}
				src={depoiment.pictureSrc}
				alt={depoiment.pictureAlt}
				onClick={depoiment.clickAction}
				className="informations-card-depoiment"
				id={depoiment.id}
				subtitle={depoiment.subtitle}
				text={depoiment.text}
				date={depoiment.date}
			/>
		);
	}
	renderAuboutUs() {
		return this.props.aboutUs.map(about =>
			<AboutUs
				className="about-us-group"
				id={about.id}
				key={about.id}
				text={about.text}
				subtitle={about.title}
				value=""
			/>
		);
	}

	render(){
		const {className} = this.props;

		return(
			<div className={`informations ${className}`}>
				{this.renderCardMotivation()}
				<Subtitle id="i" className="carousel-title">O que dizem sobre nós:</Subtitle>
				<Coursel 
					className="informations-carousel"
					children={this.renderCardDepoiment()}
					infinit
				/>
				{this.renderAuboutUs()}
			</div>
		);
	}
}

Informations.PropTypes = {
	motivations: PropTypes.array.isRequired,
	depoiments: PropTypes.array.isRequired,
	className: PropTypes.string,
};

import React, { Component } from "react";
import { connect } from "react-redux";

import { openSignupModal, showSuccessModalAction } from "../actions";
import { AdditionalInformation } from  "../organisms";
import { SignupModal, HomeTemplate, Informations } from "../templates";
import { Icon, Button } from "../atoms";
import { aboutUsModel, cardMotivationModel, cardDepoimentModel } from "../models";

class Welcome extends Component{ 

	constructor(props){
		super(props);
		this.state = {
			fullscreen: false,
		};
	}

	renderSize() {
		const width = window.screen.width;
		const height = window.screen.height;
		this.setState({fullscreen: !this.state.fullscreen});
	}


	changeColor() {
		document.querySelector("#ytplayer").style.borderColor = "#CCC";
	}
	
	render(){
		return(
			<section className="page-home">
				<SignupModal/>
				<nav className="page-home-nav-bar">
					<img src="/assets/images/logo-x2.png"></img>
					<Button onClick={this.props.openSignupModal} className="home-signup-action-button"><Icon type="ball"/> Cadastrar-se</Button>
				</nav>
				<HomeTemplate />
				<div className="container">
					<Informations motivations={cardMotivationModel} aboutUs={aboutUsModel} depoiments={cardDepoimentModel} className="" />
				</div>
			</section>
		);

	}
}
export default connect(null, {openSignupModal, showSuccessModalAction})(Welcome);
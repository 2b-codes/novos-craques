import React, { Component } from "react";
import { connect } from "react-redux";

import { openSignupModal, showSuccessModalAction } from "../actions";
import { SignupModal, HomeTemplate, Informations } from "../templates";
import { aboutUsModel, cardMotivationModel, cardDepoimentModel } from "../models";
import { Icon, Button } from "../atoms";
import { HomeController } from "../controllers";

class Welcome extends Component{ 

	constructor(props){
		super(props);
		this.state = {
			about: false,
		};

		this.controller = new HomeController();
	}

	renderMore(){
		return (
			<div className="container">
				<Informations motivations={cardMotivationModel} aboutUs={aboutUsModel} depoiments={cardDepoimentModel} className="" />
			</div>
		);
	}
	
	render(){
		return(
			<section className="page-home">
				<SignupModal/>
				<nav className="page-home-nav-bar">
					<img src="/assets/images/logo-x2.png"></img>
					<Button onClick={this.props.openSignupModal} className="home-signup-action-button"><Icon type="ball"/> Cadastrar-se</Button>
				</nav>
				<HomeTemplate learnMoreAction={() =>this.setState({about: true})}/>
				{this.state.about ? this.renderMore() : null}
			</section>
		);

	}
}
export default connect(null, {openSignupModal, showSuccessModalAction})(Welcome);
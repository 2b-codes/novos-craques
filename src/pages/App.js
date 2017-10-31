import React, { Component } from "react";
import { connect } from "react-redux";

import { openSignupModal, showSuccessModalAction } from "../actions";
import { AdditionalInformation } from  "../organisms";
import {SignupModal, Loading, SuccessModal} from "../templates";
import {Icon, Button} from "../atoms";

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
			<div className={`aqui ${this.state.fullscreen ? "--fullscreen" : ""}`}>
				<Loading />
				<SuccessModal />
				{this.props.children}
			</div>
		);

	}
}
export default connect(null, { showSuccessModalAction })(Welcome);
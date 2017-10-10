import React, { Component } from "react";
import { connect } from "react-redux";

import {openSignupModal, showSuccessModalAction } from "../actions";
import{  AdditionalInformation } from  "../organisms";
import {SignupModal, Loading, SuccessModal} from "../templates";
import {Icon, Button} from "../atoms";


class Welcome extends Component{ 
	
	render(){
		return(
			<div>
				<Loading />
				<SuccessModal />
				<SignupModal/>
				<Button onClick={this.props.openSignupModal}> Cadastrar-se</Button>
			</div>
		);

	}
}
export default connect(null, {openSignupModal, showSuccessModalAction})(Welcome);
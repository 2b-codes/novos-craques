import React, { Component } from "react";
import{  AdditionalInformation } from  "../organisms";
import {SignupModal} from "../templates";
import {openSignupModal} from "../actions";
import { connect } from "react-redux";


class Welcome extends Component{ 
	
	render(){
		return(
			<div>
				<SignupModal/>
				<button onClick={this.props.openSignupModal}> texto</button>
			</div>
		);

	}
}
export default connect(null, {openSignupModal})(Welcome);
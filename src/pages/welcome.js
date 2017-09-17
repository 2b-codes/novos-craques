import React, { Component } from "react";
import{ PersonalInfoForm, SignupModal} from  "../templates";
import { connect } from "react-redux";
import { openSignupModal } from "../actions";

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
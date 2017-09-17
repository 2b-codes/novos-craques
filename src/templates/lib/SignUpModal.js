import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText } from "../../atoms";
import { WrapperModal , InputGroup } from "../../molecules";



class SignupModal extends Component{

 	constructor(props){
 		super(props);

 	}

	render(){
		return(
			<WrapperModal show={this.props.show}>khdaisdhaksjdhiasuhdkjnijk </WrapperModal>
		);

	}
}
const map = (state)=>{
	return{
		show: state.modal.showSignupModal,

	};
};

export default connect(map, {})(SignupModal);



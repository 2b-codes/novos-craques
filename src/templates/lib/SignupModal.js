import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText } from "../../atoms";
import { connect } from "react-redux";
import {WrapperModal, closeModal} from"../../molecules";
import { AdditionalInformation,PersonalInfoForm } from "../../organisms";
import { SignupController } from "../../controllers";
import { Paginator} from "../../molecules";


class SignupModal extends Component{

 	constructor(props){
 		super(props);
 		this.state={
 			values:{
 				name: "",
				last_name: "",
				cell_phone: "",
				email: "",
				sex:"",
				birttday:"",
				username:"",
				password:"",
				confirm_password:"",
			},
			contStep:2,
			currentStep:1,


 		};
 		this.controller=new SignupController(this);

 	}

 	renderStep(){

 		switch(this.state.currentStep){
 			case 1: return (
 						<PersonalInfoForm values={this.state.values}
						onChange={this.controller.handleChange}/>);
 			case 2: return(<AdditionalInformation values={this.state.values}
					onChange={this.controller.handleChange}/>);
 		};

 	}



	render(){
		console.log(this);
		return(
			<WrapperModal show={this.props.show}
				title="Informações ">
					{this.renderStep()}
			<Paginator navigationAction={this.controller.navigationAction}
						step={this.state.currentStep}/>
			</WrapperModal>
		);
	}
}


const map = (state)=>{
	return{
		show: state.modal.showSignupModal,
	};
};

export default connect(map, {closeModal})(SignupModal);



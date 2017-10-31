import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { InputText, Icon } from "../../atoms";
import { WrapperModal, Paginator } from"../../molecules";
import { AdditionalInformation, PersonalInfoForm, ConfirmationStep } from "../../organisms";
import { SignupController } from "../../controllers";
import { occupationModel } from "../../models";
import { closeModalAction, showLoadingAction, closeLoadingAction, showSuccessModalAction } from "../../actions";


class SignupModal extends Component{

 	constructor(props){
 		super(props);
 		this.state={
 			values:{
 				name: "FIrst name",
				last_name: "Last Name",
				cell_phone: "234324",
				email: "first@user.com",
				sex:"M",
				birthday: new Date(),
				username: "username",
				password: "12345",
				confirm_password: "12345",
				role: {id: "player", label: "Jogador"}
			},
			contStep:3,
			currentStep:1,
			errors: {
				name: [],
				last_name: [],
				cell_phone: [],
				email: [],
				sex: [],
				birthday: [],
				username: [],
				password: [],
				confirm_password: [],
				role: [],
			}
 		};
 		this.controller=new SignupController(this);

 	}

 	renderStep(){

 		switch(this.state.currentStep){
 			case 1: return (
				<PersonalInfoForm 
					values={this.state.values}
					onChange={this.controller.handleChange}
					occupationOptions={occupationModel}
				/>
			);

 			case 2: return(
 				<AdditionalInformation 
	 				values={this.state.values}
					onChange={this.controller.handleChange}
					onDateChange={this.controller.handleDateChange}
				/>
			);

 			case 3: return(
 				<ConfirmationStep 
	 				values={this.state.values}
					onChange={this.controller.handleChange}
					errors={this.state.errors}
					selectAction={this.controller.selectAction}
			/>);

 		};

 	}



	render(){
		const lastStep = (
			<div className="container-next"onClick={this.controller.submit}>
				<span>Finalizar</span>
				<Icon type="ball" id="seta" className="next noRotate" />
			</div>
		);
		return(
			<WrapperModal 
				show={this.props.show}
				title="Cadastre-se"
				className="signup-modal"
				classNameBody="signup-modal-body"
				closeModal={this.props.closeModalAction}
			>
				<div>
					{this.renderStep()}
					<Paginator 
						navigationAction={this.controller.navigationAction}
						step={this.state.currentStep}
						nextLabel={this.state.currentStep==this.state.contStep ? lastStep : null}
					/>
				</div>
			</WrapperModal>
		);
	}
}


const map = (state)=>{
	return{
		show: state.modal.showSignupModal,
	};
};

export default connect(map, {closeModalAction, showLoadingAction, closeLoadingAction, showSuccessModalAction })(SignupModal);



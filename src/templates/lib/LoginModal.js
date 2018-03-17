import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { InputText, Icon } from "../../atoms";
import { WrapperModal, Paginator } from"../../molecules";
import { AdditionalInformation, PersonalInfoForm, ConfirmationStep, AdressForm, InicialForm } from "../../organisms";
import { SignupController } from "../../controllers";
import { occupationModel, legModel,findUsModel  } from "../../models";
import { closeModalAction, showLoadingAction, closeLoadingAction, showSuccessModalAction } from "../../actions";


class SignupModal extends Component{

 	constructor(props){
 		super(props);
 		this.state={
 			values:{
         email: "",
         password: ""
			},
 		};
 		this.controller=new SignupController(this);

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
				id={this.props.id}
				title="Cadastre-se"
				className="signup-modal"
				classNameBody="signup-modal-body"
				closeModal={this.props.closeModalAction}
			>
        SALVEE
			</WrapperModal>
		);
	}
}


const map = (state)=>{
	return{
		show: state.modal.showLoginModal,

	};
};

export default connect(map, {closeModalAction, showLoadingAction, closeLoadingAction, showSuccessModalAction })(SignupModal);

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
 				name:"",
 				leg: {id: "", label: ""},
				birthday: new Date(),
				password: "",
				confirm_password: "",
				role: {id: "", label: ""},
				parents:{id: "", label: ""},
				last_name: "",
				cell_phone:"",
				email:"",
				sex:{id: "", label: ""},				
				username:"",
				password:"",
				cep:"",
				country:"",
				sex:"",
				origin_state:  "",
				origin_city: 	"",
				origin_country: "",
				guardian_name:  "",
				guardian_phone: "",
				fundUs:{id: "", label: ""},
				height:"",
				weight:"",
				team:"",
				position_1:"",
				position_2:"",
				position_3:"",
			},

			contStep:5,
			currentStep:1,
			errors: {

				name:[],
				last_name:[],
				cell_phone:[],
				email:[],
				idol:[],
				leg:[],
				sex:[],
				birthday:[],
				username:[],
				password:[],
				confirm_password:[] ,
				role:[],
				cep:[],
				country:[],
				sex:[],
				origin_state:[],
				origin_city:[],
				origin_country:[],
				guardian_name:[],
				guardian_phone:[],
				findUs:[],
				height:[],
				weight:[],
				team:[],
				position_1:[],
				position_2:[],
				position_3:[],
				
			}
			
 		};
 		this.controller=new SignupController(this);

 	}
 	componentDidMount(){		
 		if (!document.fullscreenElement &&    // alternative standard method		
 	      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods		
 	    if (document.documentElement.requestFullscreen) {		
 	      document.documentElement.requestFullscreen();		
 	    } else if (document.documentElement.msRequestFullscreen) {		
 	      document.documentElement.msRequestFullscreen();		
 	    } else if (document.documentElement.mozRequestFullScreen) {		
 	      document.documentElement.mozRequestFullScreen();		
 	    } else if (document.documentElement.webkitRequestFullscreen) {		
 	      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);		
 	    }		
 	  } else {		
 	    if (document.exitFullscreen) {		
 	      document.exitFullscreen();		
 	    } else if (document.msExitFullscreen) {		
 	      document.msExitFullscreen();		
 	    } else if (document.mozCancelFullScreen) {		
 	      document.mozCancelFullScreen();		
 	    } else if (document.webkitExitFullscreen) {		
 	      document.webkitExitFullscreen();		
 	    }		
 	  }		
 	}

 	renderStep(){

 		switch(this.state.currentStep){
 			case 1: return (
				<InicialForm
					values={this.state.values}
					onChange={this.controller.handleChange}
					occupationOptions={occupationModel}
					findUsOptions={findUsModel}
					
				/>
			);
 			case 2: return (
				<PersonalInfoForm 
					values={this.state.values}
					onChange={this.controller.handleChange}					
					
					
				/>
			);


 			case 3: return(
 				<AdditionalInformation 
	 				values={this.state.values}
					onChange={this.controller.handleChange}
					onDateChange={this.controller.handleDateChange}
					legOptions={legModel}
				/>
			);
			case 4: return(
 				<AdressForm
	 				values={this.state.values}
					onChange={this.controller.handleChange}
					onDateChange={this.controller.handleDateChange}

				/>
			);

 			case 5: return(
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
				id={this.props.id}
				title="Cadastre-se"
				className="signup-modal"
				classNameBody="signup-modal-body"
				closeModal={this.props.closeModalAction}
			>
				<div className="body-main">
					{this.renderStep()}
				</div>
				<Paginator 
					navigationAction={this.controller.navigationAction}
					step={this.state.currentStep}
					nextLabel={this.state.currentStep==this.state.contStep ? lastStep : null}
				/>
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

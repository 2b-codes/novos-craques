import React, { Component } from "react";
import { connect } from "react-redux";

import { Icon, Button } from "../../atoms";
import { WrapperModal } from"../../molecules";
import { closeModalAction } from "../../actions";


class SuccessModal extends Component{

 	constructor(props){
 		super(props);
 	}

	render(){
		return(
			<WrapperModal 
				show={this.props.show}
				title="Sucesso"
				className="success-modal"
				classNameBody="success-modal-body"
				closeModal={this.props.closeModalAction}
			>
				<div>
					<span className="goal">GOOOOOL!!!!</span>
					<Icon type="goal" id="goal" alt="sucesso" />
					<span className="message">Jogada realizada com sucesso!</span>
					<Button onClick={this.props.closeModalAction} type="button" >Confirmar</Button>
				</div>
			</WrapperModal>
		);
	}
}


const map = (state)=>{
	return{
		show: state.modal.showSuccessModal,
	};
};

export default connect(map, {closeModalAction})(SuccessModal);



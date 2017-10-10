import {	
	SHOW_SIGNUP_MODAL,
	CLOSE_MODAL_ACTION,
	SHOW_LOADING_ACTION,
	CLOSE_LOADING_ACTION,
	SHOW_SUCCESS_MODAL_ACTION,
} from "../../actions";

const INICIAL_STATE={

	showSignupModal: false,
	showLoadingModal: false,
	showSuccessModal: false
};

const CLOSED_STATE={

	showSignupModal: false,
	showSuccessModal: false
};
//carrega todo o state com as info da const  contendo os obj
export default (state = { ...INICIAL_STATE }, action) => {

	switch(action.type){
		//altera  o state para true carregando o modal
		case SHOW_SIGNUP_MODAL: return { ...state, showSignupModal:true };
		case CLOSE_MODAL_ACTION: return { ...state, ...CLOSED_STATE };
		case CLOSE_LOADING_ACTION: return { ...state, showLoadingModal: false };
		case SHOW_LOADING_ACTION: return { ...state, showLoadingModal: true };
		case SHOW_SUCCESS_MODAL_ACTION: return { ...state, showSuccessModal: true };

		default: return state;
	}
};


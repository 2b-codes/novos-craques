import {
	SHOW_SIGNUP_MODAL,
} from "../../actions";

const INICIAL_STATE={

	showSignupModal:false
};

const CLOSED_STATE={

	showSignupModal:false
}
//carrega todo o state com as info da const  contendo os obj
export default (state = { ...INICIAL_STATE }, action)=> {

	switch(action.type){
		//altera  o state para true carregando o modal
		case SHOW_SIGNUP_MODAL: return {...state, showSignupModal:true};


		default: return state;
	}
};


export const SHOW_SIGNUP_MODAL = "SHOW_SIGNUP_MODAL";
export const CLOSE_MODAL_ACTION = "CLOSE_MODAL_ACTION";
export const CLOSE_LOADING_ACTION = "CLOSE_LOADING_ACTION";
export const SHOW_LOADING_ACTION = "SHOW_LOADING_ACTION";
export const SHOW_SUCCESS_MODAL_ACTION = "SHOW_SUCCESS_MODAL_ACTION";

export function openSignupModal(){
	return{
		type: SHOW_SIGNUP_MODAL
	};
};

export function closeModalAction(){
	return{
		type: CLOSE_MODAL_ACTION
	};
};

export function closeLoadingAction(){
	return{
		type: CLOSE_LOADING_ACTION
	};
};

export function showLoadingAction(){
	return{
		type: SHOW_LOADING_ACTION
	};
};

export function showSuccessModalAction(){
	return{
		type: SHOW_SUCCESS_MODAL_ACTION
	};
};

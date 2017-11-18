import MainController from "./MainController";
import {UsersRepository} from "../../api";

export default class SignupController extends MainController {

	constructor(context){
		super(context);

		this.users = new UsersRepository();

		this.navigationAction=this.navigationAction.bind(context);
		this.submit=this.submit.bind(context);
		this.selectAction=this.selectAction.bind(context);


	}

	navigationAction(n){
		const contStep = this.state.contStep;

		if(n<1){
			return;
		}
		else if(n>contStep){611
			this.controller.submit();
			return;
		}
		else {
			this.setState({currentStep:n});
		}

	};

	async submit() {
		this.props.showLoadingAction();
		const values = {...this.state.values};
		let errors = {...this.state.errors};
		const toAPI = this.controller.mapToApi(values);

		const promise = await this.controller.users.create(toAPI);
		if(!promise.error){
			this.props.closeModalAction();
			this.props.showSuccessModalAction();
		}
		errors = this.controller.verifyError(promise.error, errors);
		this.setState({errors});
		setTimeout(() => this.props.closeLoadingAction(), 1000);
		

	}

	mapToApi(values) {
		return {
			name: values.name,
			last_name: values.last_name,
			cell_phone: values.cell_phone,
			email: values.email,
			sex: values.sex,
			birthday: values.birthday,
			username: values.username,
			password: values.password,
			active: true,
			role: values.role.id,
		};
	}

	selectAction(item) {
		switch(item) {
			case "name" : return  this.setState({currentStep: 1});
			case "last_name" : return  this.setState({currentStep: 1});
			case "cell_phone" : return  this.setState({currentStep: 1});
			case "email" : return  this.setState({currentStep: 1});
			case "role" : return  this.setState({currentStep: 1});

			case "sex" : return  this.setState({currentStep: 2});
			case "birthday" : return  this.setState({currentStep: 2});
			case "username" : return  this.setState({currentStep: 2});
			case "password" : return  this.setState({currentStep: 2});
			case "confirm_password" : return  this.setState({currentStep: 2});
		}
	}

	verifyError(error, errors) {
		if(!error)return false;
		switch(error.code){
			// case 600: return {  }
			case 610: errors["email"] = ["Email já existe"]; break;
			case 611: errors["username"] = ["Username já existe"]; break;
		}
		return errors;
	}

}

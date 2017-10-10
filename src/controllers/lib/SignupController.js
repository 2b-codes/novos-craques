import MainController from "./MainController";
import {UsersRepository} from "../../api";

export default class SignupController extends MainController{

	constructor(context){
		super(context);

		this.users = new UsersRepository();

		this.navigationAction=this.navigationAction.bind(context);
		this.submit=this.submit.bind(context);


	}

	navigationAction(n){
		const contStep = this.state.contStep;

		if(n<1){
			console.log( "step menor");
			return;
		}
		else if(n>contStep){
			console.log( "step maior");
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
		const toAPI = {
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
		const promise = await this.controller.users.create(toAPI);
		if(!promise.error){
			this.props.closeModalAction();
			this.props.closeLoadingAction();
			this.props.showSuccessModalAction();
		}
		this.props.closeLoadingAction();
	}

}
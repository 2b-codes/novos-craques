import MainController from "./MainController";

export default class SignupController extends MainController{

	constructor(context){
		super(context);
		this.navigationAction=this.navigationAction.bind(context);


	}

	navigationAction(n){
		console.log("teste ",n);
		const contStep= this.state.contStep;

		if(n<1){
			console.log( "step menor");
			return;
		}
		else if(n>contStep){
			console.log( "step maior");
			return;
		}
		else {
			this.setState({currentStep:n});
		}

	};

}
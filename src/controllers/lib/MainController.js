export default class MainController{

	constructor(context){
		this.handleChange=this.handleChange.bind(context);

	}


	handleChange(e){
		const{id,value}=e.target;

		const values = {...this.state.values};
		
		values[id]=value;

		this.setState({values});
	}
}

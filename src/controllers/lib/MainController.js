export default class MainController{

	constructor(context){
		
		this.handleChange=this.handleChange.bind(context);
		this.handleDateChange=this.handleDateChange.bind(context);

	}


	handleChange(e){
		const{id,value}=e.target;

		const values = {...this.state.values};
		values[id]=value;

		this.setState({values});
	}

	handleDateChange(e){
		const value = e._d;
		
		const values = {...this.state.values};
		
		values["birthday"]=new Date(value);
		console.log("SALVE", values);

		this.setState({values});
	}
}

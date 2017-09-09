import React, { Component } from "react";
import { LoginForm } from "../organisms";

export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};
	render(){

		return(
			<div>
				
				<LoginForm errors={[]} values={[]} submit={()=> ""} handleChange={() => console.log("CLiquei")} />
				
			</div>
		);

	}
}
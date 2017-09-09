import React, { Component } from "react";


import { HomeTemplate } from "../templates";

export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};
	render(){

		return(
			<div>
				<HomeTemplate />			
			</div>
		);

	}
}
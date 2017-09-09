import React, { Component } from "react";
import { ProgressForm, AboutUs } from "../molecules";

export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};
	render(){

		return(
			<div>
				
				<Coursel type="downArrow" children={this.children()} infinit />
				
			</div>
		);

	}
}
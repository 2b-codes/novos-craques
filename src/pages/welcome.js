import React, { Component } from "react";
import { ProgressForm, AboutUs } from "../molecules";

import PropTypes from "prop-types";



export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	
	};
	

	render(){
		return(
						
			<div>
				<AboutUs 
					className={""}
					text={"sdfsd"}
				 />
								
			</div>
		);
	}
}
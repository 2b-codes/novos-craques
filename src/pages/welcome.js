import React, { Component } from "react";
import { ProgressForm, AboutUs } from "../molecules";
import PropTypes from "prop-types";



export default  class Welcome extends Component{ 

	render(){
		return(
						
			<div>

				<AboutUs 

					subtitle={"Que Somos"}
					className={"quem-somos"}

					text={"sdfsd"}
				 />
			</div>
		);
	}
} 
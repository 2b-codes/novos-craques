import React, { Component } from "react";
import { ProgressForm, AboutUs } from "../molecules";

import PropTypes from "prop-types";
import { ButtonIcon } from "../molecules";
import { DropDown, Picture} from "../atoms";
import { CardDepoiment, TitleAndSubtitle }from "../molecules";





export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};

	render(){

		return(
			<div>
				<TitleAndSubtitle 
					title= { "TITULO PAGE"}
					subtitle={"SUBTITLE"}					
				/>

			</div>
		);

	}
}
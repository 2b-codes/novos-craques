import React, { Component } from "react";
import { ButtonIcon } from "../molecules";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	}

	render(){
		return( 
		   <div>
				<ButtonIcon 
					onClick={() => console.log("clockado")}
					label={"Bão Loko"}
					iconType={"like"}
					typeButton={"submit"}
					id={"loko"}
					className={"doidão"}
					left
				/>
		   </div>
		);
	}
}
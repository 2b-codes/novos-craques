import React, { Component } from "react";
import { NumberLikes } from "../molecules";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	}

	render(){
		return( 
		   <div>
				<NumberLikes 
					className={"shit"}
					number={77}
				/>
		   </div>
		);
	}
}
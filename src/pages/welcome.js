import React, { Component } from "react";
import { SearchBar } from "../molecules";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	}

	render(){
		return( 
		   <div>
				<SearchBar 
				/>
		   </div>
		);
	}
}
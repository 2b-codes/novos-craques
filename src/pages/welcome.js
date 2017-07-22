import React, { Component } from "react";
import { ProfileImageName } from "../molecules";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	}

	render(){
		return( 
		   <div>
				<ProfileImageName 
					src={"https://s-media-cache-ak0.pinimg.com/736x/74/52/d3/7452d38f550def302016a6bbf378a81b--natural-hair-art-black-artwork.jpg"}
					onClick={console.log("clicked")}
					className={"shit"}
					id={"ODEIO ISSO"}
					name={"Cuzão"}
				/>
		   </div>
		);
	}
}
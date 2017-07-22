import React, { Component } from "react";
import { CardMotivation } from "../molecules";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	}

	render(){
		return( 
		   <div>
				<CardMotivation 
					src={"https://css-tricks.com/wp-content/uploads/2013/04/align-content.svg"}
					onClick={() => console.log("CLiCADO")}
					className={"lool"}
					text={"lsdfhls hsdl sjdhf sjhfkh feelfesjk jshf shg ljg eslj erkslj ser gslrk gls gsr geos kldgjh serl hgselh gseklrhjg ser hgkrslh gjskehgshklshgrskd gsj ghse srgh giuh seuih seiu hgesuih giughr"}
					subtitle={"TITULO"}
				/>
		   </div>
		);
	}
}
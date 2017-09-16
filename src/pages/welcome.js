import React, { Component } from "react";


import { Informations } from "../templates";
import { cardDepoimentModel, cardMotivationModel, aboutUsModel } from "../models";

export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};
	render(){
		return(
			<div>
				<Informations 
					depoiments={cardDepoimentModel}
					motivations={cardMotivationModel}
					aboutUs={aboutUsModel} 
				/>			
			</div>
		);

	}
}
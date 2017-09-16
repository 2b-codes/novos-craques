import React, { Component } from "react";
import { SubHeader } from "../organisms";
import { MenuProfile } from "../organisms";
import { LoginForm } from "../organisms";
import { MenuOptionLogOut } from "../organisms";
import { Informations } from "../templates";
import { cardDepoimentModel, cardMotivationModel, aboutUsModel } from "../models";

export default  class Welcome extends Component{ 
	
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
import React, { Component } from "react";
import { SubHeader } from "../organisms";
import { MenuProfile } from "../organisms";
import { LoginForm } from "../organisms";
import { WrapperModal } from "../molecules";
import { Informations } from "../templates";
import { cardDepoimentModel, cardMotivationModel, aboutUsModel } from "../models";

export default  class Welcome extends Component{ 
	
	render(){
		return(
			<div>
				<WrapperModal 
					title="titulo"
					children="SAlve"
					visible={true}
					closeAction={() => ""}
				/>			
				<Informations 
					depoiments={cardDepoimentModel}
					motivations={cardMotivationModel}
					aboutUs={aboutUsModel}
				/>
			</div>
		);

	}
}
import React, { Component } from "react";
import { SubHeader } from "../organisms";
import { MenuProfile } from "../organisms";
import { LoginForm } from "../organisms";
import { MenuOptionLogOut } from "../organisms";
import { HomeTemplate } from "../templates";
import { cardDepoimentModel, cardMotivationModel, aboutUsModel } from "../models";

export default  class Welcome extends Component{ 
	
	render(){
		return(
			<div>
				<HomeTemplate />
			</div>
		);

	}
}
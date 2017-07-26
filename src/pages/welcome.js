import React, { Component } from "react";
import { ProgressForm, AboutUs } from "../molecules";
import PropTypes from "prop-types";
import { ButtonIcon } from "../molecules";
import { DropDown, Picture,Subtitle } from "../atoms";
import { CardDepoiment }from "../molecules";




export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

	
	};
	

	render(){

		return(
			<div>
				<CardDepoiment 
					src={"https://lh3.googleusercontent.com/proxy/e7RJ2NUsZTtczgaWd1TPoj5MHNIWOwsx47h4Vw2r9XQwPpvAztL_L9jmfYYmzVmQkDfUxJebXUSRSkqiE3fQEcBieA=w530-h297-p"}
					onClick={() => console.log("abrir perfil")}
					subtitle={"Apelido"}
					placeholder={"00/00/0000"}
					text={"depoimento hdiauhsdiahsd "}
					
				/>

			</div>
		);

	}
}
import React, { Component } from "react";
import { SubHeader } from "../organisms";
import { MenuProfile } from "../organisms";
import { LoginForm } from "../organisms";
import { MenuOptionLogOut } from "../organisms";
import { HomeTemplate } from "../templates";
import { WrapperModal } from "../molecules";
import { Informations } from "../templates";
import { cardDepoimentModel, cardMotivationModel, aboutUsModel } from "../models";

export default  class Welcome extends Component{ 

	constructor(props){
		super(props);
		this.state = {
			fullscreen: false,
		};
	}

	renderSize() {
		const width = window.screen.width;
		const height = window.screen.height;
		this.setState({fullscreen: !this.state.fullscreen});
	}


	changeColor() {
		document.querySelector("#ytplayer").style.borderColor = "#CCC";
	}
	
	render(){
		return(
			<div className={`aqui ${this.state.fullscreen ? "--fullscreen" : ""}`}>
				<div className={`iVideo ${this.state.fullscreen ? "--fullscreen" : ""}`}>
					<iframe
						className={`SALVE ${this.state.fullscreen ? "--fullscreen" : ""}`}
						id="ytplayer"
						type="text/html"
						src="https://www.youtube.com/embed/QzRIPJMK6l8?cc_load_policy=1&controls=0&enablejsapi=1&loop=1&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3"
						frameBorder="0"
					/>
					<button className="button" onClick={e => {e.stopPropagation(); this.renderSize();}}>Mudar tabanho da tela</button>
				</div>
			</div>
		);

	}
}
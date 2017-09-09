import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Subtitle, Picture } from "../../atoms";


export default class MenuOptionLogout extends Component{


	render(){
		const{value, className, onclick, src}=this.props;
		return(
			<div className="menu-option">
				
				
					<Icon 
						type="home"
						className="home"
					/>
					<span>home</span>
					
				
				
				<div>
					<Icon
						type="close"
						className={"cad"}
						onclick={onclick}
						/>
					
					<span>Seguir</span>
				</div>
				<div>
					<Icon
						type="about"
						className={"sobre"}
						onclick={onclick}
						/>
					<span>sair</span>

				</div>

			</div>
		);	
	}
}

MenuOptionLogout.PropTypes={
	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onclick:PropTypes.string.isRequired,
	src:PropTypes.string.isRequired,	
}; 
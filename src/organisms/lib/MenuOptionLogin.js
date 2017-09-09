import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Subtitle, Picture } from "../../atoms";


export default class MenuOption extends Component{


	render(){
		const{value, className, onclick, src}=this.props;
		return(
			<div className="menu-option">
				
				<Picture 
					src={src}
					value={value}
					onclick={onclick}
					className="pic"
					/><span>Perfil</span>
					
					
				<div>
					<Icon 
						type="settings"
						className="settings"
					/>
					<span>Configurar</span>
					
				</div>
				
				<div>
					<Icon
						type="follow"
						className={"seguir"}
						onclick={onclick}
						/>
					
					<span>Seguir</span>
				</div>
				<div>
					<Icon
						type="logout"
						className={"sair"}
						onclick={onclick}
						/>
					<span>sair</span>

				</div>

			</div>
		);	
	}
}

MenuOption.PropTypes={
	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onclick:PropTypes.string.isRequired,
	src:PropTypes.string.isRequired,	
}; 
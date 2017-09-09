import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "../../atoms";


export default class MenuOption extends Component{


	render(){
		const{value, className}=this.props;
		return(
			<div>
				<icon 
					type="avatar" 
					className="avatar"
				/>
				<SubTitle
					className={`name ${className}`}
					value={value}
				/>
			</div>
		);	
	}
}

MenuOption.PropTypes={
	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
import React, { Component } from "react";
import { Button, InputText, InputNumber, InputDate, Checkbox, RadioButton, InputCep, InputCpf,
 Picture, Video, Icon } from "../atoms";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	}

	render(){
		return( 
		   <div>
		   		<div>
					<Icon type="logout" />
					<Icon type="about" />
					<Icon type="home" />
					<Icon type="settings" />
					<Icon type="avatar" />
					<Icon type="menu" />
					<Icon type="checked" />
					<Icon type="downArrow" />
					<Icon type="close" />
					<Icon type="circularChecked" />
					<Icon type="arrowBold" />
					<Icon type="search" />
					<Icon type="avatarLight" />
					<Icon type="friends" />
					<Icon type="follow" />
					<Icon type="cam" />
					<Icon type="like" />
					<Icon type="greenMore" />
					<Icon type="plus" />
				</div>
		   </div>
		);
	}
}
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picture } from "../../atoms";

export default class MenuProfile extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render(){
		const { className } = this.props;
		return(
			<div className={`menu-profile ${className}`}>
				<Picture 
					src={this.props.profilePicture}
					className="profile-image"
				/>
			</div>
		);
	}
}

MenuProfile.PropTypes={

};

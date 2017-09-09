import React, { Component } from "react";
import PropTypes from "prop-types";

import { ButtonIcon } from "../../molecules";
import { Picture } from "../../atoms";

export default class SubHeader extends Component {

	constructor(props) {
		super(props);
	}

	render(){
		const{ className }=this.props;
		return(
			<div className={`sub-header ${className}`}>
				<ButtonIcon 
					label="Publicar Novo Video"
					iconType="cam"
					typeButton="button"
					id="newPostButton"
					onClick={this.props.newVideoAction}
					left
					className="newPost"
				/>
				<Picture 
					src={this.props.pictureProfile}
					id="profileIcon"
					className="image"
					onClick={this.props.clickProfileAction}
				/>
			</div>
		);
	}
}

SubHeader.PropTypes={

};

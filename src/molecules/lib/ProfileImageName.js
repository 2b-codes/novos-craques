import React, { Component } from "react";
import PropTypes from "prop-types";

import { Picture } from "../../atoms";

export default class ProfileName extends Component {

	render() {
		const { src, onClick, className, id, name } = this.props;
		return(
			<div className={`profile-image-name ${className}`}>
				<Picture 
					src={src} 
					onClick={onClick}
					className={"profile-picture"}
					id={"profile-picture"}
				/>
				<label className="profile-label">{name}</label>
			</div>
		);
	}
}

ProfileName.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.isRequired
};

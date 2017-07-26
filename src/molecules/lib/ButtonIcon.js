import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Icon } from "../../atoms";

export default class ButtonIcon extends Component {
	renderButton() {
		const { left, onClick, label, iconType, typeButton } = this.props;

		if(left)
			return( 
				<Button
					className={"IconButton"}
					id={"IconButton"}
					type={typeButton}
					onClick={onClick}
				>
					<Icon type={iconType} id="likeButton"/>
					<span>{label}</span>
				</Button>
			);
		else
			return (
				<Button
					className={"IconButton"}
					id={"IconButton"}
					type={typeButton}
					onClick={onClick}
				>
					<span>{label}</span>
					<Icon type={iconType} id="likeButton"/>
				</Button>
			);
	}

	render() {
		const { id, className } = this.props;
		return(
			<div id={id} className={`button-icon ${className}`}>
				{this.renderButton()}
			</div>
		);
	}
}

ButtonIcon.PropTypes={
	label: PropTypes.string.isRequired,
	iconType: PropTypes.string.isRequired,
	typeButton: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	left: PropTypes.bool
};

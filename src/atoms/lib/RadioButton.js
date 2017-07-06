import React, { Component } from "react";

export default class RadioButton extends Component {

	render() {
		const { value, name, id, label, className, onChange } = this.props;
		return(
			<div className={`radio-button ${className}`} onclick={onChange}>
				<div className="radio-button-input">
					<input type="radio" id={id} name={name} value={value} /> 
					<label htmlFor={id}></label>
				</div>
				<label htmlFor={id}>{label}</label>
			</div>
		);
	}
}

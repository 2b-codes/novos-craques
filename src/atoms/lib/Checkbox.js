import React, { Component } from "react";

export default class Checkbox extends Component {

	render() {
		const { value, name, id, label, className, onChange } = this.props;
		return(
			<div className={`checkbox ${className}`} onclick={onChange}>
				<div className="checkbox-input">
					<input type="checkbox" id={id} name={name} value={value} /> 
					<label htmlFor={id}></label>
				</div>
				<label htmlFor={id}>{label}</label>
			</div>
		);
	}
}

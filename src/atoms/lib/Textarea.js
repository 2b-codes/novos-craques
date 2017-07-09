import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Textarea extends Component {

	renderInput() {
		const { id, placeholder, onChange, value, className } = this.props;
		return (
			<textarea
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				className={`textarea ${className}`}
				value={ value }
				rows="4"
			> 
			</textarea>
		);
	}

	render() {
		return <div className="input-group">{this.renderInput()}</div>;
	}
}

Textarea.PropTypes={
	id: PropTypes.string.isrequired,
	placeholder: PropTypes.string.isrequired,
	onChange: PropTypes.func.isrequired,
	value: PropTypes.string.isrequired,
	className: PropTypes.string.isrequired,
};
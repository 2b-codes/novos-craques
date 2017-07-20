import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputMail extends Component {

	render() {
		const{ className, onChange, value, id, placeholder } = this.props;
		return(
			<input
				type="email"
				className={`input-mail ${className}`}
				onChange={onChange}
				value={value}
				id={id}
				placeholder={placeholder}
			/>
		);
	}
}

InputMail.propTypes = {

	className: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};
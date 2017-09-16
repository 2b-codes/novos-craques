import React, { Component } from "react";
import PropTypes from "prop-types";

import { InputText, Button } from "../../atoms";
import { InputGroup } from "../../molecules";

export default class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render(){
		const{ className }=this.props;
		return(
			<form onSubmit={e => { e.preventDefault(); this.props.submit();}} className={`login-form ${className}`}>
				<InputGroup
					id="id"
					label="E-mail"
					errors={this.props.errors["email"]}
				>
					<InputText 
						id="email"
						value={this.props.values["email"]}
						onChange={this.props.handleChange}
					/>
				</InputGroup>
				<InputGroup
					id="id"
					label="Senha"
					errors={this.props.errors["password"]}
				>
					<InputText 
						id="password"
						type="password"
						value={this.props.values["password"]}
						onChange={this.props.handleChange}
					/>
				</InputGroup>
				<Button 
					className="login-button" 
					type="submit"
					id="submitLogin"
					onClick={this.props.submit}
				>
					Entrar
				</Button>
			</form>
		);
	}
}

LoginForm.PropTypes={
	errors: PropTypes.array.isRequired, 
	values: PropTypes.array.isRequired,
	submit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	className: PropTypes.string

};

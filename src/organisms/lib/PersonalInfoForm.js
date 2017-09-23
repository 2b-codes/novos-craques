import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText } from "../../atoms";
import { InputGroup } from "../../molecules";


export default class PersonalInfoForm extends Component{

	render(){
		const{ className, onChange, values }=this.props;
		return(
			<div className="Personal">
				<InputGroup id="name" label="Nome">
					<InputText value={values["name"]} id="name" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="last_name" label="Sobrenome">
					<InputText value={values["last_name"]} id="last_name" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="cell_phone" label="Celular">
					<InputText value={values["cell_phone"]} id="cell_phone" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="email" label="e-mail">
					<InputText value={values["email"]} id="email" onChange={onChange}/>
				</InputGroup>
			</div>
		);
	}
}

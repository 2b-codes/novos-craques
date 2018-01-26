import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputNumber, InputEmail, DropDown } from "../../atoms";
import { InputGroup } from "../../molecules";



export default class InicialForm extends Component{

	render(){
		const { className, onChange, values, options, occupationOptions  } = this.props;
		return(
			<div className="personal">
				<Subtitle>Antes de mais nada</Subtitle>
				<InputGroup id="name" label="Diz aí como você chama?">
					<InputText value={values["name"]} id="name" onChange={onChange} placeholder="nome"/>
				</InputGroup>
				
				<InputGroup id="cell_phone" label="Celular">
					<InputNumber value={values["cell_phone"]} id="cell_phone" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="email" label="E-mail">
					<InputEmail value={values["email"]} id="email" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="role" label="Você é ">
					<DropDown options={occupationOptions} value={values["role"]} id="role" onChange={onChange}/>
				</InputGroup>
			</div>
		);
	}
}

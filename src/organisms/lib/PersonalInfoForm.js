import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputNumber, InputEmail, DropDown } from "../../atoms";
import { InputGroup } from "../../molecules";



export default class PersonalInfoForm extends Component{

	render(){
		const { className, onChange, values, options, occupationOptions, legOptions } = this.props;
		return(
			<div className="personal">
				<Subtitle>Informações Pessoais</Subtitle>
				<InputGroup id="name" label="Nome">
					<InputText value={values["name"]} id="name" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="last_name" label="Sobrenome">
					<InputText value={values["last_name"]} id="last_name" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="cell_phone" label="Celular">
					<InputNumber value={values["cell_phone"]} id="cell_phone" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="email" label="E-mail">
					<InputEmail value={values["email"]} id="email" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="role" label="Sou">
					<DropDown options={occupationOptions} value={values["role"]} id="role" onChange={onChange}/>
				</InputGroup>

				<InputGroup id="idol" label="Meu idolo é">
					<InputText value={values["idol"]} id="idol" onChange={onChange}/>
				</InputGroup>

				<InputGroup id="leg" label="Perna">
					<DropDown options={legOptions} value={values["leg"]} id="leg" onChange={onChange}/>
				</InputGroup>

			</div>
		);
	}
}

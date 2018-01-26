import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputNumber, InputEmail, DropDown, InputDate } from "../../atoms";
import { InputGroup } from "../../molecules";
import { sexModel,legOptions } from "../../models";



export default class PersonalInfoForm extends Component{

	render(){
		const { className, onChange, values, options, occupationOptions, onDateChange } = this.props;
		return(
			<div className="personal">
				<Subtitle>Informações Pessoais</Subtitle>
				
				<InputGroup id="last_name" label="Sobrenome">
					<InputText value={values["last_name"]} id="last_name" onChange={onChange}/>
				</InputGroup>

				<InputGroup id="birttday" label="Nascimento">
					<InputDate value={values["birttday"]} id="birttday" onChange={onDateChange}/>
				</InputGroup>
				<InputGroup id="sex" label="Sexo">
					<DropDown options={sexModel} value={values["sex"]} id="sex" onChange={onChange}/>
				</InputGroup>

				<InputGroup id="responsible" label="Nome do responsável">
					<InputText value={values["responsible"]} id="responsible" onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="responsible_cell_phone" label="Celular do responsável">
					<InputNumber value={values["responsible_cell_phone"]} id="responsible_cell_phone" onChange={onChange}/>
				</InputGroup>
			</div>
		);
	}
}

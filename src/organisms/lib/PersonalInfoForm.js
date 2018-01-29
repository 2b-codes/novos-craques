import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputNumber, InputEmail, DropDown, InputDate } from "../../atoms";
import { InputGroup } from "../../molecules";
import { sexModel } from "../../models";



export default class PersonalInfoForm extends Component{

	render(){
		const { className, onChange, values, options, onDateChange } = this.props;
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
				<InputGroup id="height" label="Altura">
					<InputText value={values["height"]} id="height" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="weight" label="Peso">
					<InputText value={values["weight"]} id="weight" onChange={onChange}/>
				</InputGroup>

				<InputGroup id="guardian" label="Nome do responsável">
					<InputText value={values["guardian"]} id="guardian" onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="guardian_cell_phone" label="Celular do responsável">
					<InputNumber value={values["guardian_cell_phone"]} id="guardian_cell_phone" onChange={onChange}/>
				</InputGroup>
				


			</div>
		);
	}
}

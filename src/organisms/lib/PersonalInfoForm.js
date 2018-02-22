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
				
				<InputGroup id="birttday" label="Nascimento">
					<InputDate value={values["birttday"]} id="birttday"  onChange={onDateChange}/>
				</InputGroup>
				<InputGroup id="sex" label="Sexo">
					<DropDown options={sexModel} value={values["sex"]} id="sex" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="height" label="Altura">
					<InputText value={values["height"]} id="height" placeholder="0.00"onChange={onChange}/>
				</InputGroup>
				<InputGroup id="weight" label="Peso">
					<InputText value={values["weight"]} id="weight" placeholder="00.00G"onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="guardian_name" label="Nome do responsável">
					<InputText value={values["guardian_name"]} id="guardian_name" placeholder="Pais/Avós/tios"onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="guardian_phone" label="Celular do responsável">
					<InputNumber value={values["guardian_phone"]} id="guardian_phone" placeholder="00-0000-0000"onChange={onChange}/>
				</InputGroup>
			</div>
		);
	}
}

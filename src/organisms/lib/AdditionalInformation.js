import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputDate } from "../../atoms";
import { InputGroup } from "../../molecules";


export default class AdditionalInformation extends Component{

	render(){
		const{ className, onChange, values, onDateChange }=this.props;
		return(
			<div className="additional">
				<Subtitle>Informações Adicionais</Subtitle>
				<InputGroup id="sex" label="Sexo">
					<InputText value={values["sex"]} id="sex" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="birttday" label="Nascimento">
					<InputDate value={values["birttday"]} id="birttday" onChange={onDateChange}/>
				</InputGroup>
				<InputGroup id="username" label="Apelido">
					<InputText value={values["username"]} id="username" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="password" label="Senha">
					<InputText type="password" value={values["password"]} id="password" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="confirm_password" label="Confirmar Senha">
					<InputText type="password" value={values["confirm_password"]} id="confirm_password" onChange={onChange}/>
				</InputGroup>
			</div>
		);
	}
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputNumber, InputEmail, DropDown } from "../../atoms";
import { InputGroup } from "../../molecules";



export default class AdressForm extends Component{

	render(){
		const { className, onChange, values, options } = this.props;
		return(
			<div className="adress">
				<Subtitle>Endereço</Subtitle>
				<InputGroup id="street" label="logradouro">
					<InputText value={values["street"]} id="street" onChange={onChange} placeholder=" Rua/avenida"/>
				</InputGroup>
				<InputGroup id="complemento" label="Complemento">
					<InputText value={values["complemento"]} id="complemento" onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="bairro" label="Bairro">
					<InputText value={values["bairro"]} id="bairro" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="origin_city" label="Cidade">
					<InputText value={values["origin_city"]} id="origin_city" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="origin_state" label="Estado">
					<InputText value={values["origin_state"]} id="origin_state" onChange={onChange}/>
				</InputGroup>

				<InputGroup id="cep" label="Cep">
					<InputNumber value={values["cep"]} id="cep" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="origin_country" label="País">
					<InputEmail value={values["origin_country"]} id="origin_country" onChange={onChange}/>
				</InputGroup>				

			</div>
		);
	}
}

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
				<InputGroup id="Logradouro" label="Logradouro">
					<InputText value={values["Logradouro"]} id="Logradouro" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="complemento" label="Complemento">
					<InputText value={values["complemento"]} id="complemento" onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="bairro" label="Bairro">
					<InputText value={values["bairro"]} id="bairro" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="cidade" label="Cidade">
					<InputText value={values["cidade"]} id="cidade" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="estado" label="Estado">
					<InputText value={values["estado"]} id="estado" onChange={onChange}/>
				</InputGroup>

				<InputGroup id="cep" label="Cep">
					<InputNumber value={values["cep"]} id="cep" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="pais" label="País">
					<InputEmail value={values["pais"]} id="pais" onChange={onChange}/>
				</InputGroup>				

			</div>
		);
	}
}

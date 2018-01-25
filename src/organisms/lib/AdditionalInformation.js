import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputDate, DropDown } from "../../atoms";
import { InputGroup } from "../../molecules";



export default class AdditionalInformation extends Component{

	render(){
		const{ className, onChange, values,legOptions, options}=this.props;
		return(
			<div className="additional">
				<Subtitle>Informações Adicionais</Subtitle>
				
				
				<InputGroup id="username" label="Apelido">
					<InputText value={values["username"]} id="username" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="idol" label="Meu idolo é">
					<InputText value={values["idol"]} id="idol" onChange={onChange}/>
				</InputGroup>

{/*				<InputGroup id="leg" label="Perna">
					<DropDown options={legOptions} value={values["leg"]} id="leg" onChange={onChange}/>
				</InputGroup>*\*/}
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

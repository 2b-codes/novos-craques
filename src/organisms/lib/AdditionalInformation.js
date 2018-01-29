import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, InputDate, DropDown } from "../../atoms";
import { InputGroup } from "../../molecules";



export default class AdditionalInformation extends Component{

	render(){
		const{ className, onChange, values,legOptions, options}=this.props;
		return(
			<div className="additional">
				<Subtitle>Informações de boleiro</Subtitle>				
				
				<InputGroup id="username" label="Apelido">
					<InputText value={values["username"]} id="username" onChange={onChange}/>
				</InputGroup>
				
				<InputGroup id="leg" label="No Jogo você é">
					<DropDown options={legOptions} value={values["leg"]} id="leg" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="position_1" label="Quais posições você joga ?">
					<InputText value={values["position_1"]} id="position_1" onChange={onChange} placeholder=" Posição 1"/>
				</InputGroup>

				<InputGroup id="position_2" >
					<InputText value={values["position_2"]} id="position_2" onChange={onChange}placeholder=" Posição 2"/>
				</InputGroup>
				<InputGroup id="position_3" >
					<InputText value={values["position_3"]} id="position_3" onChange={onChange}placeholder=" Posição 3"/>
				</InputGroup>

				<InputGroup id="team" label="Qual time você torce ?">
					<InputText value={values["team"]} id="team" onChange={onChange}/>
				</InputGroup>
				
			</div>
		);
	}
}

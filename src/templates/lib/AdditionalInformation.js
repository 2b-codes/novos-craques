import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText } from "../../atoms";
import { InputGroup } from "../../molecules";


export default class AdditionalInformation extends Component{

	render(){
		const{ className, onChange, values }=this.props;
		return(
			<div className="additional">
				<InputGroup id="sex" label="sex">
					<InputText value={values["sex"]} id="sex" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="birttday" label="birttday">
					<InputText value={values["birttday"]} id="birttday" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="username" label="username">
					<InputText value={values["username"]} id="username" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="password" label="password">
					<InputText value={values["password"]} id="password" onChange={onChange}/>
				</InputGroup>
				<InputGroup id="confirm_password" label="confirm_password">
					<InputText value={values["confirm_password"]} id="confirm_password" onChange={onChange}/>
				</InputGroup>
			</div>
		);
	}
}

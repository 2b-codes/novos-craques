import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle, Icon } from "../../atoms";
import { InputGroup } from "../../molecules";


export default class ConfirmationStep extends Component {

	render(){
		const{ className, onClick, values, errors, selectAction }=this.props;
		return(
			<table className={`confirmation-step ${className}`}>
				<thead className="header">
					<tr>
						<th>Campo</th>
						<th>Valor</th> 
					</tr>
				</thead>
				<tbody className="body">
					<tr onClick={() => selectAction("name")}>
						<td>Nome</td>
						<td>{values.name || ""}</td> 
						{errors["name"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("last_name")}>
						<td>Sobrenome</td>
						<td>{values.last_name || ""}</td> 
						{errors["last_name"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("cell_phone")}>
						<td>Telefone</td>
						<td>{values.cell_phone || ""}</td> 
						{errors["cell_phone"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("email")}>
						<td>E-mail</td>
						<td>{values.email || ""}</td> 
						{errors["email"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("Sou")}>
						<td>Perna</td>
						<td>{values.leg.label || ""}</td> 
						{errors["leg"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("role")}>
						<td>Sou</td>
						<td>{values.role.label || ""}</td> 
						{errors["role"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("sex")}>
						<td>Sexo</td>
						<td>{values.sex["label"] || ""}</td> 
						{errors["sex"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("birthday")}>
						<td>Nascimento</td>
						<td>{values.birthday ? `${values.birthday.getDate()}/${values.birthday.getMonth()+1}/${values.birthday.getFullYear()}` : ""}</td> 
						{errors["birthday"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
					<tr onClick={() => selectAction("username")}>
						<td>Apelido</td>
						<td>{values.username}</td> 
						{errors["username"][0] ? <td><Icon type="exclamationRed" /></td> : null}
					</tr>
				</tbody>
			</table>
		);
	}
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputText, Subtitle } from "../../atoms";
import { InputGroup } from "../../molecules";


export default class ConfirmationStep extends Component {

	render(){
		const{ className, onClick, values }=this.props;
		return(
			<table className={`confirmation-step ${className}`}>
				<thead className="header">
					<tr>
						<th>Campo</th>
						<th>Valor</th> 
					</tr>
				</thead>
				<tbody className="body">
					<tr>
						<td>Nome</td>
						<td>{values.name || ""}</td> 
					</tr>
					<tr>
						<td>Sobrenome</td>
						<td>{values.last_name || ""}</td> 
					</tr>
					<tr>
						<td>Telefone</td>
						<td>{values.cell_phone || ""}</td> 
					</tr>
					<tr>
						<td>E-mail</td>
						<td>{values.email || ""}</td> 
					</tr>
					<tr>
						<td>Sou</td>
						<td>{values.role.label || ""}</td> 
					</tr>
					<tr>
						<td>Sexo</td>
						<td>{values.sex || ""}</td> 
					</tr>
					<tr>
						<td>Nascimento</td>
						<td>{values.birthday ? `${values.birthday.getDate()}/${values.birthday.getMonth()+1}/${values.birthday.getFullYear()}` : ""}</td> 
					</tr>
					<tr>
						<td>Apelido</td>
						<td>{values.username}</td> 
					</tr>
				</tbody>
			</table>
		);
	}
}

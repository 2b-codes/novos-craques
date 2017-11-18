import React, { Component } from "react";
import { connect } from "react-redux";

import { openSignupModal, showSuccessModalAction } from "../actions";
import { AdditionalInformation } from  "../organisms";
import {SignupModal, Loading, SuccessModal} from "../templates";
import {Icon, Button} from "../atoms";
import {HomeController} from "../controllers";

class Teste extends Component{ 

	constructor(props){
		super(props);
		this.state = {
			users: [],
		};
		this.controller = new HomeController(this);
	}

	async componentWillMount(){
		this.controller.getUsers();
	}

	convert(){
		return this.state.users.map((user, i)=>
			<tr key={i}>
				<td>{user.name}</td>
				<td>{user.last_name}</td>
				<td>{`${user.active}`}</td>
				<td>{user.birthday}</td>
				<td>{user.cell_phone}</td>
				<td>{user.created_at}</td>
				<td>{user.email}</td>
				<td>{"########"}</td>
				<td>{user.role}</td>
				<td>{user.sex}</td>
				<td>{user.user_id}</td>
				<td>{user.username}</td>
			</tr>
		);
	}


	render(){
		console.log(this);
		return(
			<div className={`aqui ${this.state.fullscreen ? "--fullscreen" : ""}`}>
				<table>
					<thead>
						<tr>
							<th>{"Nome"}</th>
							<th>{"Sobrenome"}</th>
							<th>{"Status"}</th>
							<th>{"aniversário"}</th>
							<th>{"Celular"}</th>
							<th>{"Criado"} Em</th>
							<th>{"E"}-mail</th>
							<th>{"Senha"}</th>
							<th>{"Tipo"}</th>
							<th>{"Sexo"}</th>
							<th>{"ID"}</th>
							<th>{"Username"}</th>
						</tr>
					</thead>
					<tbody>{this.convert()}</tbody>
				</table>
			</div>
		);

	}
}
export default connect(null, { showSuccessModalAction })(Teste);
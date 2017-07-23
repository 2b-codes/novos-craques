import React, { Component } from "react";
import { ProgressForm } from "../molecules";
import { InputCep, InputCpf } from "../atoms";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
		this.state={
			values: {
				number: "",
				cpf: ""
			}
		};
	}

	handleChange(e) {
		const {values} = this.state;
		const {id, value} = e.target;
		values[id] = value;
		this.setState({values});
	}

	render(){
		console.log("STATE", this.state);
		return( 
		   <div>
				<InputCep
					id={"number"}
					onChange={this.handleChange.bind(this)}
					value={this.state.values["number"]}
					placeholder={"sdhkf"}
				/>
				<InputCpf
					id={"cpf"}
					onChange={this.handleChange.bind(this)}
					value={this.state.values["cpf"]}
					placeholder={"sdhkf"}
				/>
		   </div>
		);
	}
}
import React, { Component } from "react";
import { ProgressForm } from "../molecules";
import { InputCep, InputCpf, Title } from "../atoms";
import { NumberLikes } from "../molecules";
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
				<NumberLikes 
					className={"shit"}
					number={77}
				/>
		   </div>
		);
	}
}
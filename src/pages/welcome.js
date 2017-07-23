import React, { Component } from "react";
import PropTypes from "prop-types";

import { ButtonIcon } from "../molecules";
import { DropDown } from "../atoms";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
		this.state={
			values: {
				number: "",
				cpf: "",
				select: ""
			},
			options: [
				{id: "x", label:"1"},
				{id: "w", label:"2"},
				{id: "e", label:"3"},
				{id: "r", label:"4"},
				{id: "g", label:"5"},
				{id: "a", label:"6"},
				{id: "d", label:"7"},
				{id: "aSA", label:"7"},
				{id: "dASD", label:"7"},
				{id: "dASSDFD", label:"7"},
				{id: "dDSFG", label:"7"},
				{id: "dZXC", label:"7"},
				{id: "TRYd", label:"7"},
				{id: "dGDF", label:"7"},
				{id: "Cd", label:"7"},
				{id: "dDHTR", label:"7"},
				{id: "WEd", label:"7"},
				{id: "GJHd", label:"7"},
				{id: "m", label:"8"},
			]
		};
	}

	handleChange(e) {
		const {values} = this.state;
		const {id, value} = e.target;
		console.log([e.target]);
		values[id] = value;
		this.setState({values});
	}

	render() {
		console.log("STATE", this.state);
		return(
		   <div>
		   		WELCOME
			</div>
		);
	}
}
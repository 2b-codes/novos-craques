import React, { Component } from "react";
import PropTypes from "prop-types";

import { ButtonIcon } from "../molecules";
import { InputDate } from "../atoms";


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
		return(
		   <div >
			   <InputDate 
				   onChange={this.handleChange} 
				   value={this.state.values["date"]}
				   noInput={false}
				   noTime
				 />
			</div>
		);
	}
}
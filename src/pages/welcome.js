import React, { Component } from "react";
import { ProgressForm } from "../molecules";
import { InputCpf } from "../atoms";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
		this.state={
			values: {
				number: ""
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
				<InputCpf
					id={"number"}
					onChange={this.handleChange.bind(this)}
					value={this.state.values["number"]}
					placeholder={"sdhkf"}
				/>
		   </div>
		);
	}
}
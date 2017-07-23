import React, { Component } from "react";
import { ProgressForm } from "../molecules";
import { InputCep, InputCpf, BackgroundImage } from "../atoms";
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
				<BackgroundImage
					src="https://s-media-cache-ak0.pinimg.com/originals/48/4f/d1/484fd1b213ec4c921028039d3e955630.jpg"
				/>
		   </div>
		);
	}
}
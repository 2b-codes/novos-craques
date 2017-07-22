import React, { Component } from "react";
import { ProgressForm } from "../molecules";
import { Button } from "../atoms";
import PropTypes from "prop-types";


export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
		this.state={
			step: 0
		};
	}

	addStep(){
		setTimeout(() => {
			let { step } = this.state;
			step==9 ? step = 0 : step ++;
			this.setState({step});
		}, 2000);
	}
	add(){
		console.log("aqui");
		let { step } = this.state;
		step==9 ? step = 0 : step ++;
		this.setState({step});
	}

	render(){
		return( 
		   <div>
				<ProgressForm 
					numberSteeps={10}
					step={this.state.step}
				/>
				{this.addStep()}
				
		   </div>
		);
	}
}
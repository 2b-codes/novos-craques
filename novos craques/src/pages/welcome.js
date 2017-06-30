import React, { Component } from "react";
import { Button, InputText } from "../atoms";
import PropTypes from "prop-types";
//
export default  class Welcome extends Component{ 

	constructor(props){

		super(props);
	}

	render(){
		return( 
			   <div>
			   		<div>

						<Button clickAction={ ()=> console.log("fui clicado") }> clique para testar</Button>

					</div>

					<div>
						<input type="search" placeholder="pesquise aqui" className="input-text"/> 
					</div>
					
			   </div>

				
				
		);

	}

}
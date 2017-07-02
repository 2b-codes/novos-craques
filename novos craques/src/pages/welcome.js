import React, { Component } from "react";
import { Button, InputText, InputNumber, InputDate } from "../atoms";
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
						
						<input type="text" placeholder="pesquise aqui" className="input-text" onChange={ "" }/> 	

					</div>

					<div>
						
						<input type="number" className="input-number" onChange={ "" } value={"14"}/> 

					</div>

					<div>
						<input clickAction={()=> console.log("data esolhida") } type="date" className="date" onChange={""} value={""}/>
					</div>
					
			   </div>

								
		);

	}

}
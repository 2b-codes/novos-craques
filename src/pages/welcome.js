import React, { Component } from "react";
import { Button, Link, InputText, Textarea, InputNumber, InputDate, Checkbox, RadioButton } from "../atoms";
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
					<Link url="facebook.com"> clique para testar</Link>
				</div>
				<div>
					<Textarea 
						placeholder="pesquise se foder aqui" 
						className="input-text" 
						onChange={ () => console.log("ALTEREI") }
					/> 	
				</div>
				<div>
					<InputNumber 
						className="input-number" 
						onChange={ () => console.log("ALTEREI") }
						value={"14"}
					/> 
				</div>
				<div>
					<InputDate 
						clickAction={()=> console.log("data esolhida") } 
						type="date" className="date" 
						onChange={""} 
						value={""}
					/>
				</div>
				<div>
					<RadioButton 
						value="AAA"
						name="AA"
						id="AA"
						label="HORNET"
						className="Slow"
						onChange={()=> console.log("ALTERADO")}
					/>
				</div>
		   </div>
		);
	}
}
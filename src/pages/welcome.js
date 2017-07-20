import React, { Component } from "react";
import { Button, InputText, InputNumber, InputDate, Checkbox, RadioButton, InputMail, InputCep, InputCpf,
 Picture, BackImage, Video, DropDown } from "../atoms";
import PropTypes from "prop-types";
import Dropdown from 'react-toolbox/lib/dropdown';


//
export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);
	}

	render(){
		return( 
		   <div>

		   		<div>
					<DropDown
					className="drop"
					/>
				</div>
		   		<div>
					<Button clickAction={ ()=> console.log("fui clicado") }> clique para testar</Button>
				</div>
				<div>
					<InputText 
						placeholder="pesquise aqui" 
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

				<div>
					<InputMail 	
						
						className="input-mail" 
						onChange={ () => console.log("teste")}
					/> 	
				</div>

				<div>
					<InputCep
						className="input-cep"
						//value=""
						id="KKK"
						onChange={ () => console.log("entra cep")}

					/>
				</div>
				<div>
					<InputCpf 
						value={""}
						className="input-cpf"
						
						onChange={()=>console.log("teste cpf")} 

					/>
				</div>

				<div>
					<Picture 
						
						onclick={""}
						className="picture"

					/>
				</div>
				<div>
					<BackImage 
						src={""}
						className="back-image"
						id={""}
						/>
				</div>
				<div>
					<video
						src={""}
						className="video"
						id={""}
						/>
				</div>

		   </div>
		);
	}
}
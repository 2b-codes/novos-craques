import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputText extends Component{

	render(){

		const{ className, id, onChange, value }= this.props;

		return(
				// os ${}  concatena string,  entre as chaves é string 
				// antes do cifrão é variavel NÃO ESQUECER ASPAS INVERTIDA
				// o className do button é uma variável pois no nome pode ser alterado
					<input className={`input-text ${className}`} id={ id } onChange={ onChange } value={ value } type="text" />

			);

	}
}

InputText.propTypes={

	className: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.string.isRequired,
};


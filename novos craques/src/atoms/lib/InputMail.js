import React, { Component } from "react";
import PropTypes from "prop-types" ;


export default class InputMail extends Component{


	render(){
		const{onchange}= this.props;
		return(
			<input type="email" className="input-email" placeholder=" digite seu e-mail" onchange={onchange } value={ value } />
		);
	}
}

InputMail.propTypes={

	onchange: PropTypes.func.isRequired,
};


import React, { Component } from "react";
import PropTypes from "prop-types";



export default class InputDate extends Component{


	render(){
		
		const{clicAction}=this.props;

		return(

			 <input type="date" onClick={clicAction} className="date" value={value}/>
		);

	}

}

InputDate.propTypes={
	onClick: PropTypes.func.isRequired,
	value: PropTypes.func.isRequired

};
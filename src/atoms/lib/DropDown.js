import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DropDown extends Component{

	render(){
		const{className, id, onSelect} =this.props;
		return(
			<select
				className={`drop ${className}`}
				id={id}
				onSelect={ onSelect }>

				<option>First </option>
	            <option>Second</option>
	            <option>Third </option>
	            <option>Forth </option>
	            <option>Fifth </option>
	            <option>Six   </option>
	            <option>Seven </option>
	            <option>Eight </option>
	            <option>Ten   </option>
	            <option>Eleven</option>
	            <option>Twelve</option>
          	</select>   

		);
	}

}

DropDown.PropTypes={

	className: PropTypes.string.isRequired,
	id: PropTypes.string,
	onSelect: PropTypes.func
};


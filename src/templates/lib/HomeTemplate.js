import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "../../atoms";

export default class HomeTemplate extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render(){
		const{ className }=this.props;
		return(
			<div className={`home-template ${className}`}>
			Salve
			</div>
		);
	}
}

HomeTemplate.PropTypes = {
};

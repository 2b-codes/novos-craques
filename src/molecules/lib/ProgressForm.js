import React, { Component } from "react";
import PropTypes from "prop-types";

import { Icon } from "../../atoms";

export default class ProgressForm extends Component {

	renderSteps() {
		const { numberSteeps, step, className } = this.props;
		const array = [];
		for(let i=0; i<numberSteeps; i++){
			if(i==step) array.push(<Icon className="selected" type="circleSelected" key={i}/>);
			else array.push(<Icon type="circle" key={i} />);
		};
		return array;
	}

	render() {
		const { className } = this.props;
		return(
			<div className={`progress-form ${className}`}>
				{this.renderSteps()}
			</div>
		);
	}
}

ProgressForm.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.isRequired
};

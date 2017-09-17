import React, { Component } from "react";
import PropTypes from "prop-types";
import {Icon} from "../../atoms";

export default class Paginator extends Component{

	render(){
		const{className,nextAction, prevAction}= this.props;
		return(
			<div className= {`paginator ${className}`}>
				<div className="container-prev" onClick={prevAction}> 
					<Icon type="downArrow" id="seta" className="prev" />
					<span>Lance Aneterior</span>
				</div>
				<div className="container-next"onClick={nextAction}>
					<span>Próximo Lance</span>
					<Icon type="downArrow" id="seta" className="next"/>
				</div>
			</div>


		);
	}
}

Paginator.propTypes={
	className: PropTypes.string.isRequired,
	nextAction:PropTypes.func.isRequired,
	prevAction: PropTypes.func.isRequired,
};

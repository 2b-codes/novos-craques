import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "../../atoms";

export default class Coursel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			step: 0,
			steps: props.children.length-1
		};
	}

	renderChildren() {
		return this.props.children[this.state.step];
	}

	navigateAction(n) {
		if(this.props.infinit){
			if(n>this.state.steps){this.setState({step: 0}); return;}
			else if(n<0){this.setState({step: this.state.steps}); return;}
			this.setState({step: n});
			return;
		}		
		if(n>this.state.steps) return;
		else if(n<0) return;
		this.setState({step: n});
	}

	render(){
		const { className }=this.props;
		return(
			<div className={`coursel ${className}`}>
				<Icon 
					type="downArrow" 
					className="prev" 
					clickAction={()=>this.navigateAction(this.state.step -1)}
					id="courselPrevAction"
				/>
				<div className="children">
					{this.renderChildren()}
				</div>
				<Icon 
					type="downArrow" 
					className="next" 
					clickAction={()=>this.navigateAction(this.state.step +1)}
					id="courselNextAction"
				/>
			</div>
		);
	}
}

Coursel.PropTypes={
	className: PropTypes.string.isRequired,
	children: PropTypes.array.isRequired,
	infinit: PropTypes.bool
};

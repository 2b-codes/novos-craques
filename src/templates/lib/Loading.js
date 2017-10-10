import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Icon } from "../../atoms";

class Loading extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render(){
		const {className, learnMoreAction} = this.props;

		return(
			<div className={`loading ${this.props.show ? "" : "-hidden"}`}>
				<div className="center">
					<Icon type="ball" id="loading"></Icon>
					<span className="loading-legend">Carregando...</span>
				</div>
			</div>
		);
	}
}

const map = state=> {
	return {
		show: state.modal.showLoadingModal
	};
};

export default connect(map, {})(Loading);
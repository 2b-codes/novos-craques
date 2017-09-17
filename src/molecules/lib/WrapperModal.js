import React, { Component } from "react";
import PropTypes from "prop-types";

import { Title, Icon } from "../../atoms";

export default class WrapperModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			closing: false,
			show: false
		};
	}

	componentWillMount() {
		if(this.props.show)
			this.setState({ show: true });
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.show && !nextProps.show) {
			this.setState({ closing: true });
			setTimeout(() => { 
				if(!this.props.show) 
					this.setState({ show: false }); 
			}, 300);
		} else if(nextProps.show) {
			this.setState({ show: true, closing: false });
		}
	}

	render() {
		const { show, closing } = this.state;
		const { title, children, id, color, disabledClose, closeModal, type } = this.props;
		
		return (
			<section
				className={`wrapper-modal ${ this.state.closing ? "closing" : "" } ${show || "--hide"} ${!color || `--${color}`}`}
				id={id}
				onClick={closeModal}
			>
				<div onClick={e => e.stopPropagation()} className="modal">
					{
						title ?
						<header className="header">
							<Title type="h2">{title}</Title>
							<span onClick={closeModal} className={`close ${ !disabledClose || "--hide" }`}>
								<Icon type="close" clickAction={closeModal} />
							</span>
						</header> : null
					}
					<main className="main">
						{children}
					</main>
				</div>
			</section>
		);
	}
}

WrapperModal.propTypes = {
	title: PropTypes.node,
	children: PropTypes.element.isRequired,
	show: PropTypes.bool,
	id: PropTypes.string,
	disabledClose: PropTypes.bool,
	closeAction: PropTypes.func,
	color: PropTypes.string
};
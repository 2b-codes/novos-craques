import React, { Component } from "react";
import PropTypes from "prop-types";

import { InputText, Icon } from "../../atoms";

export default class SearchBar extends Component {

	render() {
		const { className } = this.props;
		return(
			<div className={`search-bar ${className}`}>
				<Icon type="search" />
				<InputText
					className={"search-input"}
					id={"search"}
					onChange={e => console.log("mudei pra ", e.target.value)}
					value={""}
					placeholder={"Pesquisar"}
				/>
			</div>
		);
	}
}

SearchBar.PropTypes={
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	children: PropTypes.isRequired
};

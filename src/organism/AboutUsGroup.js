import React,  { Component } from "react";
import PropTypes from "prop-types";
import {AboutUs} from "../../molecules";

export default class AboutUsGroup extends Component{

	constructor(props){

		super(props);
		this.state={card:[missao, visao, valores],
			contain:{item:""}
		};

		this.handleChange=this.handleChange.bind(this);

	};

	handleChange(e){
		let{contain}=this.state;
		const {id,value}=e.target;
		contain[id]=value;
		this.setState({contain});

	}

	renderTable() {
	    return this.state.card.map( (item, key) => {
	      return (
	        <tr key={key}>
	          <td>{item}</td>
	          
	        </tr>
	      );
	    } );
	}



	render(){

		return(
			<div> 
							

			</div>



		);
	}

}
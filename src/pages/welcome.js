import React, { Component } from "react";
import PropTypes from "prop-types";

import { Icon } from "../atoms";
import { CardDepoiment } from "../molecules";
import { Coursel } from "../organisms";

export default  class Welcome extends Component { 

	constructor(props){ 	
		super(props);
	};

	children() {
		return [
			{
				src: "https://scontent.fcgh5-1.fna.fbcdn.net/v/t1.0-9/21430072_1444644618965215_2061773756449126763_n.jpg?oh=b9e5421ffe65caa40179608d44cf5d93&oe=5A16FB15",
				alt: "kauan",
				children: "Kauan viado",
				subtitle: "Kauan mais viado ainda",
				text: "o mais viadão"
			}, 
			{
				src: "https://trello-avatars.s3.amazonaws.com/949255df913920b06242fbfcda8af71e/30.png",
				alt: "Isaque",
				children: "Isaque o mais foda",
				subtitle: "Muito foda",
				text: "Foda nivel Hard"
			}
		].map( item =>
		
			<CardDepoiment 
				src={item.src}
				alt={item.alt}
				onClick={()=> console.log("SALVE")}
				className="akjgd"
				children={item.children}
				id="ID-não-sei"
				subtitle={item.subtitle}
				text={item.text}
			/>
		);
	}
	

	render(){

		return(
			<div>
				
				<Coursel type="downArrow" children={this.children()} infinit />
				
			</div>
		);

	}
}
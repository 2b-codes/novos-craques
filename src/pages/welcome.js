import React, { Component } from "react";

import { MenuProfile } from "../organisms";

export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};
	render(){

		return(
			<div>
				<MenuProfile 
					profilePicture="https://trello-avatars.s3.amazonaws.com/949255df913920b06242fbfcda8af71e/30.png"
				/>
			</div>
		);

	}
}
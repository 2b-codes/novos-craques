import React, { Component } from "react";

import { SubHeader } from "../organisms";

export default  class Welcome extends Component{ 

	constructor(props){ 	
		super(props);

		
	};
	render(){

		return(
			<div>
				<SubHeader 
					pictureProfile="https://avatars2.githubusercontent.com/u/17505453?v=4&s=40" 
					newVideoAction={()=> console.log("novo video")}
				/>
			</div>
		);

	}
}
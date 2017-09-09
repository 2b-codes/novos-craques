import React, { Component } from "react";

import { MenuOption,Subtitle } from "../organisms";

export default  class Welcome extends Component{ 
	
	render(){

		return(
			<div>

				<MenuOption value={"teste"}
					src="https://pbs.twimg.com/profile_images/147706634/Picture_001_400x400.jpg"/>	

				


				<MenuProfile 
					profilePicture="https://trello-avatars.s3.amazonaws.com/949255df913920b06242fbfcda8af71e/30.png"
				/>

			</div>
		);

	}
}
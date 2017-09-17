import React, { Component } from "react";
import{ PersonalInfoForm} from  "../templates";

export default  class Welcome extends Component{ 
	
	render(){
		return(
			<div>
				<PersonalInfoForm values={{}	}/>
			</div>
		);

	}
}
import React from "react";
import { Router, Route, browserHistory } from "react-router";

import Welcome from "./pages/welcome";

export default () => {

	return (
		<Router history={browserHistory}>
			<Route path="/" component={Welcome} />
		</Router>
	);
};
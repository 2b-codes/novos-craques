import React from "react";
import { Router, Route, browserHistory } from "react-router";

import App from "./pages/App";
import Home from "./pages/Home";

export default () => {

	return (
		<Router history={browserHistory}>
			<Route component={App}>
				<Route path="/" component={Home} />
			</Route>
		</Router>
	);
};
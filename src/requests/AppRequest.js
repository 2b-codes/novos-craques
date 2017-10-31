import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "../pages/App";
import Reducers from "../reducers/index";

export default class AppRequest {

	index(request, response) {
		const store = createStore(Reducers);
		const html = ReactDOMServer.renderToString(<Provider store={store}><App /></Provider>);
		const data = {
			html,
			seo: {
				title: "Novos Craques",
				description: ""
			}
		};

		response.render("index", { data });
	
	}

}
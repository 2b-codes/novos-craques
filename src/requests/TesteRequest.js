import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Teste from "../pages/Teste";
import Reducers from "../reducers/index";

export default class TesteRequest {

	index(request, response) {
		const store = createStore(Reducers);
		const html = ReactDOMServer.renderToString(<Provider store={store}><Teste /></Provider>);
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
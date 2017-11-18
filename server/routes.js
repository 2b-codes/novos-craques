import HomeRequest from "../src/requests/HomeRequest";
import TesteRequest from "../src/requests/TesteRequest";

const routes = (app) => {

	app.get("/", new HomeRequest().index);
	app.get("/teste", new TesteRequest().index);

};


export default routes;
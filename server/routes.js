import HomeRequest from "../src/requests/HomeRequest";

const routes = (app) => {

	app.get("/", new HomeRequest().index);

};


export default routes;
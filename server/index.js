import express from "express";
import path from "path";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 8888;


app.use("/", express.static("public"));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

routes(app);

console.log("\n-----------\n\n\n", process.env.ROOT_URL, "\n-----------\n\n\n")

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});
import BaseRepository from "./BaseRepository";
import axios from "axios";

export default class UsersRepository extends BaseRepository {

	constructor(){
		super();
		this.create = this.create.bind(this);
		this.get = this.get.bind(this);
	}

	async create(body) {
		return await this.post("/users", body);
	}

	async get() {
		const n = await this.resolvePromise(axios.get(`${"http://52.14.160.237:3000/api"}${"/users"}`));
		return n;
	}
} 
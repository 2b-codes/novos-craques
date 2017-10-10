import BaseRepository from "./BaseRepository";

export default class UsersRepository extends BaseRepository {

	constructor(){
		super();
		this.create = this.create.bind(this);
	}

	async create(body) {
		return await this.post("/users", body);
	}
} 
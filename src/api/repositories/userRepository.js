import instance from "../Service";
export default class UserRepository {
	static async getGenerates(number) {
		return instance.get(`get_generates/?phone_number=${number}`)
	}	
	static async updateGenerates(number)  {
		return instance.post(`update_generates/?phone_number=${number}`)
	}
	static async updateFreeGenerates(number)  {
		return instance.post(`update_free_generates/?phone_number=${number}`)
	}
	static async checkAddsGenerates(number){
		return instance.post(`check_adds_generates/?phone_number=${number}`)
	}
	static async getPresentations(number) {
		return instance.get(`get_presentations/?phone_number=${number}`)
	}
}

import axios from "axios";

const API_URL = "https://презентатор.рф/api/";

const instance = axios.create({
	baseURL: API_URL
})

instance.interceptors.request.use((config) => {
	return config
})

export default instance
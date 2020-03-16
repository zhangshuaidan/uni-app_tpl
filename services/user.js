import Http from '../utils/http.js';
import { baseUrl } from '../config.js'
export async function login() {
	return Http.post(`${baseUrl}/chargepile/app/user/login`, {
		channel: "wechat",
		mobile: "15102161234",
		pwd: "507f513353702b50c145d5b7d138095c",
		sourceId: "o4MEG1s7fuNZBnDgdaszk9SW_5kk",
	}).catch(err => {
		console.log('err', err)
	})
};

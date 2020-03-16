// import Http from '../../utils/request.js';
import { login } from '../../services/user.js'
const state = {
	isLogin:false,
	openid:null,
	userInfo:'ssss',
}

const mutations = {
	setUser(state,payload){
		console.log('state',state)
		console.log('payload',payload)
		state.userInfo = payload.userInfo;
	}
}

const actions = {
	async doLogin({ commit },payload){
		console.log('payload====>>>',payload)
		const res = await login();
		commit('setUser',{userInfo:{name:'zsd',age:'18'}})
		// console.log('res==>>',{userInfo:{name:'zsd',age:'18'}})

	}
}

export default {
	state,
	actions,
	mutations
}
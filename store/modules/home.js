
const state = {
	list:[],
	detail:{},
	count:0
}

const mutations = {
	setUser(state,payload){
		state.list = [
			{
				title:'1',
				msg:'这是内容111啊'
			},
			{
			  title:'2',
			  msg:'这是内容2啊啊'
			}
		]
		
		console.log('state_home',state)
		// console.log('payload',payload)
		// state.userInfo = payload.userInfo;
	}
}

const actions = {
	// async doLogin({ commit },payload){
	// 	console.log('payload====>>>',payload)
	// 	const res = await login();
	// 	commit('setUser',{userInfo:{name:'zsd',age:'18'}})
	// 	// console.log('res==>>',{userInfo:{name:'zsd',age:'18'}})
	// }
	
	async doLogin({ commit }){
		setTimeout(()=>{
			commit('setUser')
		},2000)
	
	}
}

export default {
	state,
	actions,
	mutations
}
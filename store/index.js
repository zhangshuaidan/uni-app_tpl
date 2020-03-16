import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import home from './modules/home.js'

Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		user:{
			namespaced:true,
			...user
		},
		home:{
			namespaced:true,
			...home
		}
	}
})

export default store
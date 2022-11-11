import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {auth} from './modules/auth'
import {project} from './modules/project'
export default createStore({
	state:{

	},
	mutations:
	{

	},
	actions:
	{

	},
	modules:
	{
		auth,
		project
	},
	plugins: [createPersistedState()],
})
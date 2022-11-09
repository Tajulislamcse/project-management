import axios from 'axios'
//axios.defaults.baseUrl = 'http://127.0.0.1:8000/api';

export const auth = {
	state:{
		auth_status:false,
		auth_token:'',
		auth_info:
		{
			name:'',
			email:''
		}

	},
	getters:
	{
		getAuthStatus(state)
		{
			return state.auth_status
		},
		getAuthToken(state)
		{
			return state.auth_token
		},
		getAuthInfo(state)
		{
			return state.auth_info
		}

	},
	actions:
	{
		login(context,formData)
		{

			axios.post('http://127.0.0.1:8000/api/login',formData)
			.then((response)=>{
				console.log(response.data)
			})
			.catch((error)=>{
				console.log(error.response.data)
			})
			

			
		}

	},
	mutations:
	{

	}
}
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export const project = {
    state:{

        auth_token:'',
		project_info:
		{
			name:'',
			description:'',
			status:''
		}
     //console.log('setters')


    },
    getters:
    {
     //console.log('getters');

		getProjectInfo(state)
		{
			return state.project_info
		}

    },
    actions:
    {
      AddProject(context,formData)
        {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.auth_token;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          return new Promise((resolve,reject)=>
          {
            axios.post('/projects',formData)
            .then((response)=>{
                console.log(response.data)
                context.commit('setProjectInfo',response.data)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },

        getProjects(context)
        {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.auth_token;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          return new Promise((resolve,reject)=>
          {
            axios.get('/projects')
            .then((response)=>{
               // console.log(response.data)
               // context.commit('setProjectInfo',response.data.data)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
        getUsers(context)
        {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.auth_token;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          return new Promise((resolve,reject)=>
          {
            axios.get('/users')
            .then((response)=>{
                //console.log(response.data)
               // context.commit('setProjectInfo',response.data.project)
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      }
   
    },
    mutations:
    {

       setAuthToken(state,token)
       {
        state.auth_token = token;
       },
       setProjectInfo(state,project)
       {
       	state.project_info.name = project.name;
       	state.project_info.description = project.description;
       	state.project_info.status = project.status

    }
    }
}
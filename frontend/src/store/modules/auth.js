import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

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
          return new Promise((resolve,reject)=>
          { 
            axios.post('/login',formData)
            .then((response)=>{
                //console.log(response.data)
                context.commit('setAuthToken',response.data.token)
                context.commit('setAuthInfo',response.data.user)
                resolve(response)
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },

      logout(context)
        {
        axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.auth_token;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          return new Promise((resolve,reject)=>
          {
            axios.post('/logout')
            .then((response)=>{
                //console.log(response.data)
                context.commit('setAuthInfoNull')
                resolve(response)
       
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },
      register(context,formData)
        {
          return new Promise((resolve,reject)=>
          { 
            axios.post('/register',formData)
            .then((response)=>{
                //console.log(response.data)
                context.commit('setAuthToken',response.data.token)
                context.commit('setAuthInfo',response.data.user)
                resolve(response)
            })
            .catch((error)=>{
                //console.log(error.response.data)

                reject(error)
            })
          })
      },

    },
    mutations:
    {
       setAuthToken(state,token)
       {
        state.auth_token = token;
        state.auth_status = true;

       },
       setAuthInfo(state,user)
       {
        state.auth_info.name = user.name;
        state.auth_info.email = user.email;

       },
       setAuthInfoNull(state)
       {
        state.auth_token = null;
        state.auth_status = false;
        state.auth_info.name = null;
        state.auth_info.email = null;




       }
    }
}
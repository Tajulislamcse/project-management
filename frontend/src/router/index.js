import Home from '../views/Home';
import Login from '../views/auth/Login';
import Registration from '../views/auth/Registration';
//import AddProduct from '../components/AddProduct';
import {createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
history:createWebHistory(),
routes:[
{
    path:'/',
    name:'Login',
    component:Login
},
{
    path:'/registration',
    name:'Registration',
    component:Registration
},
{
    path:'/user/home',
    name:'Home',
    component:Home
}
]

})

export default router;

import Home from '../views/Home.vue';
//import AddProduct from '../components/AddProduct';
import {createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
history:createWebHistory(),
routes:[
{
    path:'/',
    component:Home
}
]

})

export default router;

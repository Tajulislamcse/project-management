import Home from '../views/Home';
import Login from '../views/auth/Login';
import Registration from '../views/auth/Registration';
import AddProject from '../views/AddProject';
import {createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const router = createRouter({
history:createWebHistory(),
routes:[
{
    path:'/',
    name:'Login',
    component:Login,
    meta:{disableLoggedIn:true}




},
{
    path:'/registration',
    name:'Registration',
    component:Registration,
    meta:{disableLoggedIn:true}



},
{
    path:'/user/home',
    name:'Home',
    component:Home,
    meta:{auth:true}
},
{
    path:'/add-project',
    name:'add-project',
    component:AddProject,
    //meta:{auth:true}
}
]

})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.getAuthStatus) {
      next({ name: 'Login' })
    } else {
       next();
    }
  }
   else if (to.matched.some(record => record.meta.disableLoggedIn)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.getAuthStatus) {
      next({ name: 'Home' })
    } else {
       next();
    }
  }
   else {
    next()
  }
});
export default router;

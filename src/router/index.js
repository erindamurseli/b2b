import VueRouter from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)



import Home from '../view/Home.vue';
import Companies from '../view/Companies.vue';
import AboutUs from '../view/AboutUs.vue';
import ForBusinesses from '../view/ForBusinesses.vue';
import Login from '../view/Login.vue';
import SignUp from '../view/SignUp.vue';
import LoniDecor from '../view/LoniDecor.vue';
const routes = [

    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/companies',
        component: Companies,
        name: 'companies'
    },
    
    {
        path: '/about_us',
        component: AboutUs,
        name: 'about_us'
    },
    
    {
        path: '/for_businesses',
        component: ForBusinesses,
        name: ' for_businesses'
    },
    {
        path: '/loni_decor',
        component: LoniDecor,
        name: 'loni_decor'
    },
    {
        path: '/login',
        component: Login,
        name: ' login'
    },
    {
        path: '/sign_up',
        component: SignUp,
        name: ' sign_up'
    },
   
   

];



export default new VueRouter({
    mode: 'history',
    routes
});
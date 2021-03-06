import Vue from 'vue';
import Hello from '../components/hello.vue';
import RegisterForm from '../components/registerForm.vue';
import LoginForm from '../components/loginForm.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {path: "/", component: Hello},
    {path: "/login", component: LoginForm},
    {path: "/register", component: RegisterForm}
  ];
const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router
    /*components: {
        hello : Hello,
        registerform : RegisterForm,
        loginForm : LoginForm 
    }*/
})
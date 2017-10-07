import Vue from 'vue';
var hello = require('vue-loader!../components/hello.vue').default;

new Vue({
    el: '#app',
    components: {
        hello : hello
    }
})
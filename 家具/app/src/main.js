import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUI from 'element-ui';


Vue.use(ElementUI)
Vue.use(router)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
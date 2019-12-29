import Vue from 'vue'
import Router from 'vue-router'
import n1 from './n1.vue'
import n2 from './n2.vue'
import n3 from './n3.vue'
import n4 from './n4.vue'
import n5 from './n5.vue'
import n6 from './n6.vue'
import n7 from './n7.vue'
import n8 from './n8.vue'
import all from './all.vue'


Vue.use(Router)


var routes = [{
        path: '/',
        name: 'n1',
        component: n1
    }, {
        path: '/n2',
        name: 'n2',
        component: n2
    }, {
        path: '/n3',
        name: 'n3',
        component: n3,
        children: [
            { path: '/', name: 'all', component: all },
            { path: 'n7', name: 'n7', component: n7 },
            { path: 'n8', name: 'n8', component: n8 },
        ]
    }, {
        path: '/n4',
        name: 'n4',
        component: n4
    }, {
        path: '/n5',
        name: 'n5',
        component: n5
    }, {
        path: '/n6',
        name: 'n6',
        component: n6
    },

]

export default new Router({
    routes
})
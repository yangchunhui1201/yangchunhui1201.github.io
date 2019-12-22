var router = new VueRouter({
    routes: [
        { path: '/', component: { template: '#no1' } },
        {
            path: '/contact', component: { template: '#contact' },
            children: [
                { path: '/contact/gk', component: { template: '#gk' } },
                { path: '/contact/ry', component: { template: '#ry' } }
            ]
        },
        { path: '/product', component: { template: '#product' } },
        {
            path: '/news', component: { template: '#news' },
            children: [
                {
                    path: '/news/gs', component: { template: '#gs' }
                },
                { path: '/news/dt', component: { template: '#dt' } }
            ]
        },
        {
            path: '/join', component: { template: '#join' },
            children:[
                {path:'/join/sp',component:{template:'#sp'}},
                {path:'/join/jy',component:{template:'#jy'}}
            ]
        },
    ]
})
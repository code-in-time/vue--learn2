import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Contact from '././components/Contact'


Vue.config.productionTip = false

//Vue.use(VueRouter);

const Bar = { template: '<div>bar </div>' }

const routers = [
  { path: '/', component: App },
  { path: '/bar', component: Bar },
  { path: '/home', component: Home },
  { path: '/contact', component: Contact },
  { path: '/app', component: App },
];

let router = new VueRouter({mode: 'history', routes: routers});

// new Vue({
//   router,
//   render: h => (App),
// }).$mount('#app')

//render: h => h(App),

// new Vue({
//   router
// }).$mount('#app')

const a = new Vue({
  // router,
  render: h => (Bar),
})

a.$mount('#app');

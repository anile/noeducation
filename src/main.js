import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'

import Articles from './components/articles.vue'
import News from './components/news.vue'
import Lessons from './components/lessons.vue'
import Tasks from './components/tasks.vue'
import Login from './components/login.vue'
import About from './components/about.vue'
import Regulations from './components/regulations.vue'
import Users from './components/users.vue'
import Feedback from './components/feedback.vue'
import Notfound from './components/notfound.vue'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', redirect: '/articles' },
    { path: '/articles', component: Articles, name: 'articles' },
    { path: '/news', component: News, name: 'news' },
    { path: '/lessons', component: Lessons, name: 'lessons' },
    { path: '/tasks', component: Tasks, name: 'tasks' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/about', component: About, name: 'about' },
    { path: '/regulations', component: Regulations, name: 'regulations' },
    { path: '/users', component: Users, name: 'users' },
    { path: '/feedback', component: Feedback, name: 'feedback' },
    { path: '*', component: Notfound, name: 'notfound' }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


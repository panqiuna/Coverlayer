import Vue from 'vue'
import Router from 'vue-router'
import childComponent from '../components/childComponent.vue'
import praentComponent from '../components/praentComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/childComponent',
      name: 'childComponent',
      component: childComponent
    },
    {
      path: '/',
      name: 'praentComponent',
      component: praentComponent
    }
  ]
})

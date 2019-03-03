import Vue from 'vue'
import Vuex from 'vuex'
import vp from 'vuex-persistedstate'
import authentication from './authentication'
import posts from './posts'
import tasks from './task'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: {
    authentication,
    posts,
    tasks
  },
  mutations: {},
  actions: {},
  plugins: [vp({
    paths: ['authentication.token', 'route']
  })]
})
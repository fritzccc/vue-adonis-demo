import axios from '../utils/http'

export default {
  namespaced: true,
  state: {
    post_id: null,
    tasks: [],
    newTaskDescription: ''
  },
  mutations: {
    setPostId(state, id) {
      state.post_id = id;
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setNewTaskDescription(state, des) {
      state.newTaskDescription = des
    },

  },
  actions: {
    setPostId({ dispatch, state, commit }, id) {
      if (state.post_id === id) return;
      commit('setPostId', id)
      dispatch('fetchTasks')
    },
    fetchTasks({ commit, state }) {
      if (state.post_id === null) return;
      axios.get(`${state.post_id}/tasks`)
        .then(({ data }) => commit('setTasks', data))
    },
    // TODO create Tasks
  }
}
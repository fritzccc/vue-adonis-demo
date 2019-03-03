import axios from '../utils/http'

export default {
  namespaced: true,
  state: {
    posts: [],
    newPostTitle: ''
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    addPost(state, newPost) {
      state.posts = [...state.posts, newPost]
    },
    deletePost(state, deleteIndex) {
      state.posts.splice(deleteIndex, 1)
    },
    setNewPostTitle(state, val) {
      state.newPostTitle = val
    },
    setPostTitle(state, data) {
      const { index, newTitle } = data
      state.posts[index].title = newTitle
    }
  },
  actions: {
    setPosts({ commit }, posts) {
      commit('setPosts', posts)
    },
    setNewPostTitle({ commit }, val) {
      commit('setNewPostTitle', val)
    },
    createNewPost({ commit, state }) {
      axios.post('/posts', { title: state.newPostTitle })
        .then(({ data }) => {
          commit('addPost', data)
          commit('setNewPostTitle', '')
        })
    },
    fetchPosts({ dispatch }) {
      axios.get('/posts')
        .then(({ data }) => dispatch('setPosts', data))
    },
    updatePost(_, post) {
      axios.patch(`/posts/${post.id}`, { title: post.title })
    },
    deletePost({ commit }, data) {
      const { id, index } = data
      axios.delete(`/posts/${id}`)
        .then(() => {
          commit('deletePost', index)
        })
    }
  }
}
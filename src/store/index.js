import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    teamMembers: [],
    posts: [],
    post: [],
  },
  mutations: {
    // Get all tasks
    SET_TASKS(state, tasks){
      state.tasks = tasks
    },
    // get all team members
    SET_TEAMMEMBERS(state, teamMembers){
      state.teamMembers = teamMembers
    },
    // get all posts
    SET_POSTS(state, posts){
      state.posts = posts
    },
    // get one post
    SET_POST(state, post){
      state.post = post
    }
  },
  actions: {
    // Get and load all desserts
    async loadDesserts({commit}){
			const responses = await Api().get('/tasks')
      commit('SET_TASKS', responses.data)
		},
    // Get and load all members
    async loadMembers({commit}){
			const responses = await Api().get('/teamMembers')
      commit('SET_TEAMMEMBERS', responses.data)
		},
    // Get and load all posts
    async loadPosts({commit}) {
      const responses = await Api().get('/posts')
      commit('SET_POSTS', responses.data)
      console.log(responses.data);
    },
    // Get and load one post
    async loadOnePost({commit}) {
      const responses = await Api().get(`/posts`)
      commit('SET_POST', responses.data)
    }
  },
  modules: {
  }
})

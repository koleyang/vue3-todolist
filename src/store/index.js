import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      { id: 1, title: 'play', completed: false },
      { id: 2, title: 'study', completed: false },
      { id: 3, title: 'basketball', completed: false },
      { id: 4, title: 'swimming', completed: false },
    ]
  },
  getters: {
  },
  mutations: {
    addTodo(state, todo) {
      state.list.push(todo)
    },
    deleteTodo (state, id) {
      state.list = state.list.filter(todo => todo.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment(state) {
        state.counter++
      }
    },
    actions: {
      async GET_AMBIENTE({ commit }, slug) {
        console.log(slug)
        //const { data } = await axios.get('http://my-api/stars')
        //commit('SET_STARS', data)
      }
    }
  })
}

export default createStore

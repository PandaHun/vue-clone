export default {
  namespaced: true,
  state: () =>({
    isSHow : false,
  }),
  mutations:{
    setState(state, payload){
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    onNav({ commit }){
      commit('setState', {
        isShow: true
      })
    },
    offNav({ commit }){
      commit('setState', {
        isShow: false
      })
    }
  }
}

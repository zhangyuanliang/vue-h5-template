import { testRequest } from '@/api/demo'

const demo = {
  state: {
    customer: [],
  },
  mutations: {
    SET_CUSTOMER: (state, customer) => {
      state.customer = customer
    },
  },
  actions: {
    getRequest({ commit }, payload = {}) {
      return new Promise((resolve, reject) => {
        testRequest(payload).then(res => {
          commit('SET_CUSTOMER', res.data)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default demo

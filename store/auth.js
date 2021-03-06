import firebase from '~/plugins/firebase'

export const state = () => ({
  status: null,
  user: ''
})

// export const getters = () => {

// }

export const mutations = {
  SET_USE(state, user) {
    state.status = 'LoggedIn'
    state.user = user
  },
  LOGOUT(state) {
    state.status = 'LoggedOut'
    state.user = ''
  }
}

export const actions = {
  setUser({ commit }, user) {
    commit('SET_USE', user)
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('LOGOUT')
      })
  }
}

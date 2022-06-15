export default {
  USER_AUTHORIZE(state, payload) {
    state.userIndentity.access_token = payload.access_token
    state.me = payload.user_infor
    state.userIndentity.logged = true
    state.userIndentity.messageError = ''
  },

  AUTHORIZE_MESSAGE_ERROR(state, message) {
    state.userIndentity.messageError = message
  }
}

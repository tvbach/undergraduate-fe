import { apiLoginPost } from '@/api/api'

export default {
  async authentications({ commit }, data) {
    const response = await apiLoginPost(data)
    const responseData = response.data
    const payload = { access_token: responseData.access_token, user_infor: responseData.user_infor}

    if (responseData.error) {
      commit('AUTHORIZE_MESSAGE_ERROR', responseData.messages)
    } else {
      commit('USER_AUTHORIZE', payload)
    }
  }
}
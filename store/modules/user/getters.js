export default {
  authenError: state => state.userIndentity.messageError,
  access_token: state => state.userIndentity.access_token,
  logged: state => state.userIndentity.logged
}

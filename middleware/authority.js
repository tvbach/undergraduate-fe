export default async function ({ store, redirect }) {
  const user_logged = store.state.modules.user.userIndentity.logged
  if (user_logged) {
    return redirect('/' )
  }
}

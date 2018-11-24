export default ({ app }) => {
  let isClient = process.client,
    isServer = process.server,
    redirectUrl = 'login'

  app.router.afterEach((to, from) => {
    if (to.path !== '/login' && localStorage.getItem('username') === null) {
      app.router.push('/login')
    } else {
      app.router.push(to.path)
    }
  })
}

export default ({ app }) => {
  let isClient = process.client,
    isServer = process.server,
    redirectUrl = 'login'

  app.router.afterEach((to, from) => {
    if (isClient) {
      if (
        to.path !== '/app/login' &&
        localStorage.getItem('username') === null
      ) {
        app.router.push('/app/login')
      } else {
        app.router.push(to.path)
      }
    }
  })
}

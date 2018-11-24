export default function({ route, req, res, redirect }) {
  let isClient = process.client,
    isServer = process.server,
    redirectUrl = 'login'

  if (isClient) {
    console.log(route, req, res)
  }
}

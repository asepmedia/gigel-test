function getToken () {
  return localStorage.getItem('token')
}

function setToken (token) {
  return localStorage.setItem('token', token)
}

function setProfile (user) {
  return localStorage.setItem('ajs_user', user)
}

function getProfile () {
  return localStorage.getItem('ajs_user')
}

function removeToken () {
  return localStorage.removeItem('token')
}

export function checkToken () {
  return getToken () ? true : false
}

export function passportToken () {
  return getToken ()
}

export function setLogin(token) {
  return setToken(token)
}

export function revokeToken () {
  return removeToken () ? true : false
}

export function setUser (user) {
  return setProfile(user)
}

export function getUser () {
  return JSON.parse(getProfile())
}
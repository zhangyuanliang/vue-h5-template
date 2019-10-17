import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserKey = 'Account'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getUser() {
  return Cookies.get(UserKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function setUser(username) {
  return Cookies.set(UserKey, username)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function removeUser() {
  return Cookies.remove(UserKey)
}

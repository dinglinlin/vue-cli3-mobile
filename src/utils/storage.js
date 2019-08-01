/*
*  localStorage
*  sessionStorage
*  工具集合类
*/

export function getLocalStorage (key) {
  return localStorage.getItem(key)
}

export function setLocalStorage (key, value) {
  return localStorage.setItem(key, value)
}

export function removeLocalStorage (key) {
  localStorage.removeItem(key)
}

export function getSessionStorage (string) {
  return sessionStorage[string]
}

export function setSessionStorage (key, value) {
  const set = sessionStorage[key] = value
  return set
}

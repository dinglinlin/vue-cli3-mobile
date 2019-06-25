/*
*  获取 token 工具类
*  加密密码类
*/

import Cookies from 'js-cookie'

import MD5 from 'blueimp-md5'

const TokenKey = 'project-valuation-mobile-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function getDiyToken () {
  return Cookies.get(TokenKey)
}
export function setTokenAndExpirationTime (key, value, time) {
  // Number 类型单位为天  Date类型 为截止日期
  return Cookies.set(key, value, { expires: time })
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function encryptionPassword (password) {
  return MD5(password)
}

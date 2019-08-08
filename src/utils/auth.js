// 将token进行本地存储,向外部提供对应的方法
// localStorage

const TOKEN_KEY = 'token'
// 设置值
export const setUser = data => {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}

// 取出值
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(TOKEN_KEY))
}

// 移除值
export const removeUser = () => {
//   window.localStorage.setItem(TOKEN_KEY, '')
  window.localStorage.remove(TOKEN_KEY)
}

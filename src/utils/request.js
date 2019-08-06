// 配置axios相关代码的模块 -> 如
// 1. baseURL: url
// 2. 请求拦截器  (目的：发送请求之前做些什么)
// 3. 响应拦截器  (目的：对响应数据做些什么)

import axios from 'axios' // 引入axios

// axios.create() 会返回一个和axios对象一样的对象
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  console.log(response)

  // 如果响应结果对象中有 data，则直接返回这个 data 数据
  // 如果响应结果对象中没有 data，则不作任何处理，直接原样返回这个数据
  return response.data.data || response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request // 导出

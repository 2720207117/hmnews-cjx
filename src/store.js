// 该模块是用于配置Vuex的
import Vue from 'vue'
import Vuex from 'vuex'
// 把auth.js模块的所有方法变成auth对象的属性
import * as auth from '@/utils/auth.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 声明多个文件共享的值
    // 设置stata中user的初始值 -> 来源于本地存储
    user: auth.getUser()
  },
  mutations: { // 修改状态的方法
    // 定义setUser方法 修改state中的user
    setUser (state, data) {
      // 更新本地存储中的token 即 形参data
      auth.setUser(data)
      // 更新stata中的数据user
      state.user = data
    }
  }
})

export default store

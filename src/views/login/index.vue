<template>
  <div class="login">
    <form action="/">
      <!-- 导航栏 -->
      <van-nav-bar title="登录" type="primary" />

      <!-- 表单 -->
      <van-cell-group>
        <!-- required:  在输入框前会显示红色*，表示此处必须填 -->
        <!-- clearable: ' x '符，清除输入框中的内容 -->
        <van-field
          v-model="user.mobile"
          label="手机号"
          placeholder="请输入手机号"
          required
          clearable
        />

        <van-field
          v-model="user.code"
          type="text"
          label="验证码"
          placeholder="请输入验证码"
          required
        />
        <!-- 事件名.修饰符  prevent 阻止默认行为(防止点击按钮后页面跳转) -->
        <van-button type="info"  @click.prevent="handleLogin">登录</van-button>
      </van-cell-group>
    </form>

  </div>
</template>

<script>
// import axios from 'axios'
// import request from '@/utils/request.js' // 导入封装的request请求模块
import { login } from '@/api/user.js' // 接收者是一个对象 使用的是对象中的某一个方法 此处结构 {login}
// import { setUser } from '@/utils/auth.js'
import { mapMutations } from 'vuex'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async handleLogin () {
      // const res = await login(this.user)
      // console.log(res)
      // setUser(res.token) // 将token存储到本地
      // 问题：token使用次数和位置？  // 使用Vuex

      try {
        const data = await login(this.user) // 发送登录请求 返回用户信息
        console.log(data) // data里面有token信息
        this.setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  text-align: center;
  .van-nav-bar {  // 导航栏大小 及 背景颜色
    height: 128px;
    line-height: 128px;
    background-color: #3296fa;
    .van-nav-bar__title { // 导航栏字体颜色
      color: #fff;
    }
  }
}
.van-button { // 登录按钮大小 及 位置
  width: 694px;
  margin-top: 53px;
}
</style>

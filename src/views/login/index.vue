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
import axios from 'axios'

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
    async handleLogin () {
      console.log(' ---- ')
      const req = await axios({
        method: 'post',
        url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
        data: this.user
        // {
        //   mobile: this.user.mobile,  // string格式
        //   code: this.user.code       // string格式
        // }
      })
      console.log(req)
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

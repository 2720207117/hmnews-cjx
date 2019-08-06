// 处理用户相关的api请求

import request from '@/utils/request.js'

// 封装方法
// export 导出一个对象，该对象中有方法login
export const login = ({ mobile, code }) => {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
    // {
    //   mobile: this.user.mobile,  // string格式
    //   code: this.user.code       // string格式
    // }
  })
}

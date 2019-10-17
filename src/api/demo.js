import request from '@/utils/request'

// 轮询接口
export function testRequest(data) {
  return request({
    url: '/api/account/getRoleList',
    method: 'post',
    data
  })
}

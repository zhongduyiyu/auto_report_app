/*
 * @Description: 数据检查页面api
 * @Version: 0.01
 * @Autor: MoXu
 * @Date: 2021-01-25 11:06:46
 * @LastEditors: MoXu
 * @LastEditTime: 2021-01-25 13:30:01
 */

import request from '@/utils/request'

const api = {
    getList : "/getcheckDataList",
    getDetail : "/getcheckDataDetail"
}

export function getList () {
    return request({
      url: api.getList,
      method: 'get',
    })
}
export function getDetail (parameter) {
    return request({
      url: api.getDetail,
      method: 'get',
      data:parameter
    })
}


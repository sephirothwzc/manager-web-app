/*
 * 广告管理
 * @Author: 吴占超
 * @Date: 2018-11-12 22:00:58
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-14 21:33:18
 */
import Mock from 'mockjs'

Mock.mock(/app-advertisement\/find\?[^]/, 'get', param => {
  let list = Mock.mock({
    'list|10': [
      {
        'id|+1': 1,
        title: 'title' + '@string("title", 4, 8)',
        content: 'content' + '@string("content", 4, 8)',
        toUrl: 'toUrl' + '@string("content", 4, 8)',
        imageUrl: 'imageUrl' + '@string("imageUrl", 4, 8)',
        toptip: 'toptip' + '@string("toptip", 4, 8)',
        sortNumber: 10
      }
    ]
  }).list
  return { list, total: 10 }
})

Mock.mock('app-advertisement/save', 'post', param => {
  return param
})

/**
 * 根据id获取
 */
Mock.mock(/app-advertisement\/find\/[^]/, 'get', param => {
  return {
    id: 1,
    title: 'title' + '@string("title", 4, 8)',
    content: 'content' + '@string("content", 4, 8)',
    toUrl: 'toUrl' + '@string("content", 4, 8)',
    imageUrl: 'imageUrl' + '@string("imageUrl", 4, 8)',
    toptip: 'toptip' + '@string("toptip", 4, 8)',
    sortNumber: 10
  }
})

/**
 * 批量删除
 */
Mock.mock('/app-advertisement/del', 'post', param => {
  return 1
})

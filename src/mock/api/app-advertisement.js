/*
 * 广告管理
 * @Author: 吴占超
 * @Date: 2018-11-12 22:00:58
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-12 22:16:04
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

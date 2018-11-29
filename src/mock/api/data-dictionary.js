/*
 * 数据字典
 * @Author: 吴占超
 * @Date: 2018-11-14 21:32:38
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-29 21:50:13
 */
import Mock from 'mockjs'

/**
 * 数据字典根据key获取项目sys_data_dictionary
 */
Mock.mock(/\/data-dictionary\/find\?[^]/, 'get', param => {
  let list = Mock.mock({
    'list|10': [
      {
        'id|+1': 1,
        dictionaryCode: 'dictionaryCode',
        dictionaryDisplay: 'Display' + '@string("Display", 4, 8)'
      }
    ]
  }).list
  return { list, total: 100 }
})

/**
 * 数据字典根据code 获取item
 */
Mock.mock(/\/data-dictionary\/find-item\?[^]/, 'get', param => {
  let list = Mock.mock({
    'list|10': [
      {
        'id|+1': 1,
        dictionaryItem: 'dictionaryItem',
        dictionaryItemDisplay: 'Display' + '@string("Display", 4, 8)',
        remark: 'remark'
      }
    ]
  }).list
  return { list, total: 100 }
})

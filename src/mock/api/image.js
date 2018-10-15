/*
 * image webapi
 * @Author: 吴占超
 * @Date: 2018-10-15 13:40:33
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-15 13:44:31
 */
import Mock from 'mockjs'

Mock.mock('image/login-carousel', 'get', param => {
  let items = [
    {
      src: '/images/carousel/squirrel.jpg'
    },
    {
      src: '/images/carousel/sky.jpg'
    },
    {
      src: '/images/carousel/bird.jpg'
    }
  ]
  return items
})

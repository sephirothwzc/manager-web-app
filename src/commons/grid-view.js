/*
 * data grid 声明对象
 * @Author: 吴占超
 * @Date: 2018-10-22 21:36:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-22 22:04:19
 */
import { validKey } from '../utils/common-utils.js'
export default class GridView {
  constructor({ id = 'id', columns = validKey('columns'), pagination }) {
    this.id = id
    this.columns = columns
    this.pagination = pagination
  }
  get Columns() {
    return this.columns
  }
  set Columns(value) {
    this.columns = value
  }
  get Id() {
    return this.id
  }
  get Pagination() {
    return this.pagination
  }
  set Pagination(value) {
    this.pagination = value
  }
}

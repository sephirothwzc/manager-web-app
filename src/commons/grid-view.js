/*
 * data grid 声明对象
 * @Author: 吴占超
 * @Date: 2018-10-22 21:36:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-11 22:59:10
 */
import { validKey } from '../utils/common-utils.js'
export default class GridView {
  /**
   * Creates an instance of GridView.
   * @param {any} {
   *     id = 'id',
   *     columns = validKey('columns'),
   *     getMapping, // url地址
   *     delMapping, // 删除url
   *     pagination = {
   *       descending: true,
   *       page: 1,
   *       rowsPerPage: 10,
   *       totalItems: 0,
   *       sortBy: undefined,
   *       fields: undefined
   *     },
   *     firstCheck = true // 首列选中行
   *   }
   *
   * @memberOf GridView
   */
  constructor({
    id = 'id',
    columns = validKey('columns'),
    getMapping,
    delMapping = validKey('delMapping'),
    pagination = {
      descending: true,
      page: 1,
      rowsPerPage: 10,
      totalItems: 0,
      sortBy: undefined,
      fields: undefined
    },
    firstCheck = true
  }) {
    this.id = id
    this.columns = columns
    this.pagination = pagination
    this.getMapping = getMapping
    this.delMapping = delMapping
    this.firstCheck = firstCheck
  }
  get FirstCheck() {
    return this.firstCheck
  }
  set FirstCheck(value) {
    this.firstCheck = value
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
  get GetMapping() {
    return this.getMapping
  }
  set GetMapping(value) {
    this.getMapping = value
  }
  get DelMapping() {
    return this.delMapping
  }
  set DelMapping(value) {
    this.delMapping = value
  }
}

/*
 * data grid 声明对象
 * @Author: 吴占超
 * @Date: 2018-10-22 21:36:17
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-24 18:44:35
 */
import { validKey } from '../utils/common-utils.js'
export default class GridView {
  /**
   * Creates an instance of GridView.
   * @param {any} {
   *     id = 'id',
   *     columns = validKey('columns'),
   *     getMapping, // url地址
   *     pagination = {
   *       descending: true,
   *       page: 1,
   *       rowsPerPage: 10,
   *       totalItems: 0,
   *       sortBy: undefined,
   *       fields: undefined
   *     }
   *   }
   *
   * @memberOf GridView
   */
  constructor({
    id = 'id',
    columns = validKey('columns'),
    getMapping,
    pagination = {
      descending: true,
      page: 1,
      rowsPerPage: 10,
      totalItems: 0,
      sortBy: undefined,
      fields: undefined
    }
  }) {
    this.id = id
    this.columns = columns
    this.pagination = pagination
    this.getMapping = getMapping
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
}

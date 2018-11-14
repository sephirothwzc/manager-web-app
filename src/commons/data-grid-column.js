/*
 * data grid 列对象
 * @Author: 吴占超
 * @Date: 2018-10-22 21:33:36
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-14 22:50:51
 */
import { validKey } from '../utils/common-utils.js'
/**
 * data grid column
 *
 * @export
 * @class DataGridColumn
 */
export default class DataGridColumn {
  /**
   * Creates an instance of DataGridColumn.
   * @param {any} {
   *     text = validKey('text'), 标题i18n
   *     value,
   *     dataField,
   *     columnClass = 'justify-center',
   *     align = 'center',
   *     sortable = true,
   *     width = undefined,
   *     isEdit = false
   *   }
   *
   * @memberOf DataGridColumn
   */
  constructor({
    text = validKey('text'),
    value,
    dataField,
    columnClass = 'text-xs-center',
    align = 'center',
    sortable = true,
    width = undefined,
    isEdit = false
  }) {
    this.text = text
    if (value) {
      this.value = value
    } else {
      this.value = text
    }
    if (dataField) {
      this.dataField = dataField
    } else {
      this.dataField = this.value
    }
    this.columnClass = columnClass
    this.align = align
    this.sortable = sortable
    this.width = width
    this.isEdit = isEdit
  }
  get IsEdit() {
    return this.isEdit
  }
  set IsEdit(value) {
    this.isEdit = value
  }
  /**
   * 表头文本
   *
   * @readonly
   *
   * @memberOf DataGridCloumn
   */
  get Text() {
    return this.text
  }
  set Text(value) {
    this.text = value
  }
  get Value() {
    return this.value
  }
  set Value(value) {
    this.value = value
  }
  /**
   * 数据列
   *
   * @readonly
   *
   * @memberOf DataGridCloumn
   */
  get DataField() {
    return this.dataField
  }
  set DataField(value) {
    this.dataField = value
  }
  /**
   * 样式
   *
   *
   * @memberOf DataGridCloumn
   */
  get ColumnClass() {
    return this.columnClass
  }
  set ColumnClass(value) {
    this.columnClass = value
  }
}

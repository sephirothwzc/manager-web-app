/*
 * data grid 列对象
 * @Author: 吴占超
 * @Date: 2018-10-22 21:33:36
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-10-22 21:58:07
 */
export default class DataGridCloumn {
  constructor({ headerText, dataField, columnClass = 'justify-center' }) {
    this.headerText = headerText
    this.dataField = dataField
    this.columnClass = columnClass
  }
  /**
   * 表头文本
   *
   * @readonly
   *
   * @memberOf DataGridCloumn
   */
  get HeaderText() {
    return this.headerText
  }
  set HeaderText(value) {
    this.headerText = value
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

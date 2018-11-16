/*
 * @Author: 吴占超
 * @Date: 2018-11-16 21:24:53
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-16 22:25:50
 * 列表行编辑对象
 */
export default class DataGridColumnEdit {
  /**
   * Creates an instance of DataGridColumnEdit.
   * @param {any} {
   *     editType = 'input',// input\select
   *     findItems = undefined,// get function?
   *     label = 'Edit',
   *     returnObject = false,
   *     counter = undefined,
   *     rules = undefined,
   *     saveAction = undefined,
   *     cancelAction = undefined
   *   }
   *
   * @memberOf DataGridColumnEdit
   */
  constructor({
    editType = 'input',
    findItems = undefined,
    label = 'Edit',
    returnObject = false,
    counter = undefined,
    rules = undefined,
    saveAction = undefined,
    cancelAction = undefined
  }) {
    this.editType = editType
    this.findItems = findItems
    this.label = label
    this.returnObject = returnObject
    this.counter = counter
    this.rules = rules
    this.saveAction = saveAction
    this.cancelAction = cancelAction
  }
  get EditType() {
    return this.editType
  }
  set EditType(value) {
    return this.editType
  }
  get FindItems() {
    return this.findItems
  }
  set FindItems(value) {
    this.FindItems = value
  }
  get Label() {
    return this.label
  }
  set Lable(value) {
    this.label = value
  }
  get ReturnObject() {
    return this.returnObject
  }
  set ReturnObject(value) {
    this.returnObject = value
  }
  get Counter() {
    return this.counter
  }
  set Counter(value) {
    this.Counter = value
  }
  get Rules() {
    return this.Rules
  }
  set Rules(value) {
    this.rules = value
  }
  get SaveAction() {
    return this.saveAction
  }
  set SaveAction(value) {
    this.saveAction = value
  }
  get CancelAction() {
    return this.cancelAction
  }
  set CancelAction(value) {
    this.cancelAction = value
  }
}

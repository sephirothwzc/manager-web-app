/*
 * 自定义按钮对象
 * @Author: 吴占超
 * @Date: 2018-11-05 22:24:40
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-11-05 22:27:13
 */
export default class ActionButton {
  constructor({ text, actionClick }) {
    this.text = text
    this.actionClick = actionClick
  }

  get Text() {
    return this.text
  }
  get ActionButton() {
    return this.actionClick
  }
}

<template>
  <v-edit-dialog :return-value.sync="inputValue" large lazy persistent @save="save" @cancel="cancel" @open="open" @close="close">
    <div>{{ dataValue }}</div>
    <div slot="input" class="mt-3 title">{{$t(gvColumn.text)}}</div>
    <v-select slot="input" item-text="dictionaryItem" item-value="dictionaryDisplay" v-model="inputValue" label="Edit" autofocus :items="inputItems"></v-select>
  </v-edit-dialog>
</template>

<script>
/**
 * 下拉编辑
 */
export default {
  model: {
    prop: 'dataValue'
  },
  props: {
    /**
     * 编辑行
     */
    dataValue: {
      required: true
    },
    /**
     * 列对象
     */
    gvColumn: {
      type: Object,
      required: true
    },
    /**
     * 行数据
     */
    dataRow: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    /**
     * 文本输入
     */
    inputValue: undefined,
    inputItems: undefined
  }),
  watch: {
    dataValue(value) {
      this.inputValue = value
    },
    inputValue(value) {
      this.$emit('input', value)
    }
  },
  async created() {
    this.inputItems = await this.gvColumn.ColumnEdit.dataSource()
  },
  methods: {
    /**
     * 小吃吧保存
     */
    save() {
      if (!this.gvColumn.ColumnEdit.SaveAction) return this.$emit('transferSnack', { snack: true, snackColor: 'success', snackText: this.$t('toasted.DataSaved') })
      !this.gvColumn.ColumnEdit.SaveAction(this.dataRow) ||
        this.$emit('transferSnack', { snack: true, snackColor: 'success', snackText: this.$t('toasted.DataSaved') })
    },
    /**
     * 取消
     */
    cancel() {
      if (!this.gvColumn.ColumnEdit.CancelAction) return this.$emit('transferSnack', { snack: true, snackColor: 'error', snackText: this.$t('toasted.Canceled') })
      !this.gvColumn.ColumnEdit.CancelAction(this.dataRow) ||
        this.$emit('transferSnack', { snack: true, snackColor: 'error', snackText: this.$t('toasted.Canceled') })
    },
    /**
     * 打开
     */
    open() {
      if (!this.gvColumn.ColumnEdit.OpenAction) return this.$emit('transferSnack', { snack: true, snackColor: 'info', snackText: this.$t('toasted.DialogOpened') })
      !this.gvColumn.ColumnEdit.OpenAction(this.dataRow) ||
        this.$emit('transferSnack', { snack: true, snackColor: 'info', snackText: this.$t('toasted.DialogOpened') })
    },
    /**
     * 关闭
     */
    close() {
      if (!this.gvColumn.ColumnEdit.CloseAction) return this.$emit('transferSnack', { snack: true, snackColor: 'info', snackText: this.$t('toasted.DialogClosed') })
      !this.gvColumn.ColumnEdit.CloseAction(this.dataRow) ||
        this.$emit('transferSnack', { snack: true, snackColor: 'info', snackText: this.$t('toasted.DialogClosed') })
    }
  }
}
</script>

<style scoped>
</style>

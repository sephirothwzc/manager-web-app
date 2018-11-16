<template>
  <v-edit-dialog :return-value.sync="inputValue" large lazy persistent @save="save" @cancel="cancel" @open="open" @close="close">
    <div>{{ dataValue }}</div>
    <div slot="input" class="mt-3 title">{{$t(gvColumn.text)}}</div>
    <v-text-field slot="input" v-model="inputValue" :label="gvColumn.ColumnEdit.Lable" single-line counter autofocus></v-text-field>
  </v-edit-dialog>
</template>

<script>
export default {
  model: {
    prop: 'dataValue'
  },
  props: {
    /**
     * 编辑行
     */
    dataValue: {
    },
    gvColumn: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    /**
     * 文本输入
     */
    inputValue: undefined
  }),
  watch: {
    dataValue(value) {
      this.inputValue = value
    },
    inputValue(value) {
      this.$emit('input', value)
    }
  },
  methods: {
    /**
     * 小吃吧保存
     */
    save() {
      if (!this.gvColumn.ColumnEdit.SaveAction) return this.$emit('transferSnack', { snack: true, snackColor: 'success', snackText: this.$t('toasted.DataSaved') })
      !this.gvColumn.ColumnEdit.SaveAction() ||
        this.$emit('transferSnack', { snack: true, snackColor: 'success', snackText: this.$t('toasted.DataSaved') })
    },
    /**
     * 取消
     */
    cancel() {
      if (!this.gvColumn.ColumnEdit.CancelAction) return this.$emit('transferSnack', { snack: true, snackColor: 'error', snackText: this.$t('toasted.Canceled') })
      !this.gvColumn.ColumnEdit.CancelAction() ||
        this.$emit('transferSnack', { snack: true, snackColor: 'error', snackText: this.$t('toasted.Canceled') })
    },
    /**
     * 打开
     */
    open() {
      this.$emit('transferSnack', { snack: true, snackColor: 'info', snackText: this.$t('toasted.DialogOpened') })
    },
    /**
     * 关闭
     */
    close() {
      console.log('toasted.DialogClosed')
    }
  }
}
</script>

<style scoped>
</style>

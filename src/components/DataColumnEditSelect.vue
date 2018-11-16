<template>
  <v-edit-dialog :return-value.sync="dataValue" large lazy persistent @save="save" @cancel="cancel" @open="open" @close="close">
    <div>{{ dataValue }}</div>
    <div slot="input" class="mt-3 title">{{$t(gvColumn.text)}}</div>
    <v-text-field slot="input" v-model="inputValue" label="Edit" single-line counter autofocus></v-text-field>
    <v-select slot="input" v-model="inputValue" label="Edit" autofocus></v-select>
    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <v-btn flat @click="snack = false">{{$t('toasted.close')}}</v-btn>
    </v-snackbar>
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
    gvColumn: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    /**
     * 文本输入
     */
    inputValue: undefined,
    /**
     * 小吃吧
     */
    snack: false,
    /**
     * 小吃吧颜色
     */
    snackColor: undefined,
    /**
     * 小吃吧文本
     */
    snackText: undefined
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
      this.snack = true
      this.snackColor = 'success'
      this.snackText = this.$t('toasted.DataSaved')
    },
    /**
     * 取消
     */
    cancel() {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = this.$t('toasted.Canceled')
    },
    /**
     * 打开
     */
    open() {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = this.$t('toasted.DialogOpened')
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

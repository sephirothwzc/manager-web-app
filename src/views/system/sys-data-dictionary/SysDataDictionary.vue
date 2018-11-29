<template>
  <v-container
    fluid
    grid-list-xl
  >
    <v-layout>
      <v-flex
        xs12
        md6
      >
        <v-subheader>字典类别</v-subheader>
        <w-data-grid
          key="gridview"
          :grid-view="gridview"
          @eventChange="rowChange"
        ></w-data-grid>
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-subheader>字典明细</v-subheader>
        <w-data-grid
          key="detailview"
          :grid-view="detailview"
          ref="detailview"
        ></w-data-grid>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// 组件
import DataGrid from '../../../components/DataGrid.vue'
import GridView from '../../../commons/grid-view.js'
import DataGridColumn from '../../../commons/data-grid-column.js'
// import FormUtils from '../../utils/form-utils.js'
/**
 * 数据字典管理
 */
export default {
  components: {
    'w-data-grid': DataGrid
  },
  data: () => ({
    gridview: new GridView({
      columns: [
        new DataGridColumn({ text: 'dictionaryCode' }),
        new DataGridColumn({ text: 'dictionaryDisplay' }),
        new DataGridColumn({ text: 'remark' })
      ],
      getMapping: '/data-dictionary/find',
      delMapping: '/data-dictionary/del',
      firstCheck: false
    }),
    detailview: new GridView({
      columns: [
        new DataGridColumn({ text: 'dictionaryItem' }),
        new DataGridColumn({ text: 'dictionaryItemDisplay' }),
        new DataGridColumn({ text: 'remark' })
      ],
      getMapping: '/data-dictionary/find-item',
      delMapping: '/data-dictionary/del'
    })
  }),
  methods: {
    // 行选择改变事件
    rowChange(selected) {
      console.log(selected)
      selected && (this.$refs.detailview.formObject = { dictionaryCode: selected[0].dictionaryCode })
    }
  }
}
</script>

<style scoped>
</style>

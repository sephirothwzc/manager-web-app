<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex xs12 md6>
        <v-subheader>字典类别</v-subheader>
        <w-data-grid :grid-view="gridview"></w-data-grid>
      </v-flex>
      <v-flex xs12 md6>
        <v-subheader>字典明细</v-subheader>
        <w-data-grid :grid-view="gridview"></w-data-grid>
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
        new DataGridColumn({ text: 'remark' })
      ],
      getMapping: '/app-advertisement/find',
      delMapping: '/app-advertisement/del'
    })
  })
}
</script>

<style scoped>
</style>

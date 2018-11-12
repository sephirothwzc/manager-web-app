<template>
  <v-container fluid grid-list-xl>
    <w-data-grid :grid-view="gridview"></w-data-grid>
  </v-container>
</template>

<script>
// 组件
import DataGrid from '../../components/DataGrid.vue'
import GridView from '../../commons/grid-view.js'
import DataGridColumn from '../../commons/data-grid-column.js'
/**
 * 主页管理
 */
export default {
  components: {
    'w-data-grid': DataGrid
  },
  data: () => ({
    gridview: new GridView({
      columns: [
        new DataGridColumn({ text: 'title' }),
        new DataGridColumn({ text: 'content' }),
        new DataGridColumn({ text: 'toUrl' }),
        new DataGridColumn({ text: 'imageUrl' }),
        new DataGridColumn({ text: 'toptip' }),
        new DataGridColumn({ text: 'sortNumber' })
      ],
      getMapping: '/app-advertisement/find',
      delMapping: '/app-advertisement/del'
    })
  })
}
</script>

<style scoped>
</style>

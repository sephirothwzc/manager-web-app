<template>
  <v-container fluid grid-list-xl>
    <w-data-grid :grid-view="gridview"></w-data-grid>
  </v-container>
</template>

<script>
// 组件
import DataGrid from '../../../components/DataGrid.vue'
import GridView from '../../../commons/grid-view.js'
import DataGridColumn from '../../../commons/data-grid-column.js'
/**
 * 用户管理
 */
export default {
  components: {
    'w-data-grid': DataGrid
  },
  data: () => ({
    gridview: new GridView({
      columns: [
        new DataGridColumn({ text: 'userName' }),
        new DataGridColumn({ text: 'userCode' }),
        new DataGridColumn({ text: 'notes' })
      ],
      getMapping: '/sys-user'
    })
  })
}
</script>

<style scoped>
</style>

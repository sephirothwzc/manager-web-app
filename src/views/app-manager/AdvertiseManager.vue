<template>
  <v-container fluid grid-list-xl>
    <!-- Advertisement 广告 -->
    <!-- <v-subheader>{{$t('advertisement')}}</v-subheader> -->
    <w-data-grid :grid-view="gridview"></w-data-grid>
  </v-container>
</template>

<script>
// 组件
import DataGrid from '../../components/DataGrid.vue'
import GridView from '../../commons/grid-view.js'
import DataGridColumn from '../../commons/data-grid-column.js'
import DataGridColumnEdit from '../../commons/data-grid-column-edit.js'
import FormUtils from '../../utils/form-utils.js'

let dataSource = async function () {
  let data = await window.axios
    .get(`data-dictionary/find/advertType`)
  return data
}

/**
 * 主页广告管理
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
        new DataGridColumn({ text: 'sortNumber' }),
        new DataGridColumn({ text: 'advertType',
          isEdit: true,
          columnEdit: new DataGridColumnEdit({
            editType: 'select',
            rules: new FormUtils().rules(),
            dataSource: dataSource
          })
        })
      ],
      getMapping: '/app-advertisement/find',
      delMapping: '/app-advertisement/del'
    })
  }),
  created() {
    this.pageInit()
  },
  methods: {
    pageInit() {
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <v-container fluid grid-list-xl>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header">{{$t('advancedQuery')}}</div>
        <v-card>
          <v-card-text></v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <w-data-grid></w-data-grid>
  </v-container>
</template>

<script>
// 组件
import DataGrid from '../../../components/DataGrid.vue'
import GridView from '../../../commons/grid-view.js'
/**
 * 用户管理
 */
export default {
  components: {
    'w-data-grid': DataGrid
  },
  data: () => ({
    headers: new GridView()
  })
}
</script>

<style scoped>
</style>

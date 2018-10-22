<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="vagueSearch" append-icon="search" :label="$t('vagueSearch')" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :pagination.sync="gridView.Pagination" :headers="gridView.Columns" :items="desserts" :item-key="gridView.Id">
      <template slot="items" slot-scope="props">
        <tr>
          <td v-for="(gvColumn,i) in gridView.Columns" :key="i" :class="gvColumn.ColumnClass">{{props.item[gvColumn.DataField]}}</td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        "{{ vagueSearch }}"{{$t('noResults')}}
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import GridView from '../commons/grid-view.js'
/**
 * 自定义v-data-table
 */
export default {
  props: {
    gridView: {
      // 校验是否 grid-view对象
      validator: value => {
        return GridView.prototype.isPrototypeOf(value)
      },
      required: true
    }
  },
  data: () => ({
    /**
     * 模糊查询条件
     */
    vagueSearch: undefined,
    /**
     * 数据源
     */
    desserts: []
  })
}
</script>

<style scoped>
</style>

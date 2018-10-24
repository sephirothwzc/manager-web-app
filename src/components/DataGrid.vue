<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="vagueSearch" append-icon="search" :label="$t('vagueSearch')" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table class="elevation-1" :pagination.sync="gridView.Pagination" :headers="gridView.Columns" :items="desserts" :item-key="gridView.Id">
      <template slot="headers" slot-scope="props">
        <tr>
          <th v-for="header in props.headers" :key="header.text" :class="sortClass(header)" @click="header.sortable?changeSort(header.value): undefined">
            {{ header.text }}
            <v-icon small>arrow_upward</v-icon>
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr>
          <td v-for="(gvColumn,i) in gridView.Columns " :key="i " :class="gvColumn.ColumnClass ">{{props.item[gvColumn.DataField]}}</td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        "{{ vagueSearch }} "{{$t('noResults')}}
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
    selected: [],
    /**
     * 模糊查询条件
     */
    vagueSearch: undefined,
    /**
     * 数据源
     */
    desserts: []
  }),
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort(column) {
      if (this.gridView.Pagination.sortBy === column) {
        if (this.gridView.Pagination.descending) {
          this.gridView.Pagination.descending = undefined
        } else {
          this.gridView.Pagination.descending = !this.gridView.Pagination
            .descending
        }
      } else {
        this.gridView.Pagination.sortBy = column
        this.gridView.Pagination.descending = false
      }
    },
    sortClass(header) {
      let headerClass = ''
      !header.sortable ||
        (headerClass = [
          'column sortable',
          this.gridView.Pagination.descending ? 'desc' : 'asc',
          header.value === this.gridView.Pagination.sortBy ? 'active' : ''
        ])
      return headerClass
    }
  }
}
</script>

<style scoped>
</style>

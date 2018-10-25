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
            {{ $t(header.text) }}
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
    },
    /**
     * 自定义加载事件，优先级高于getMapping
     */
    loadAction: {
      type: Function
    }
  },
  data: () => ({
    /**
     * 查询条件
     */
    formObject: undefined,
    /**
     * 选中行
     */
    selected: [],
    /**
     * 模糊查询条件
     */
    vagueSearch: undefined,
    /**
     * 数据源
     */
    desserts: [],
    /**
     * 总行数
     */
    totalRows: undefined
  }),
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort(column) {
      let dd = false
      if (this.gridView.Pagination.sortBy === column) {
        if (this.gridView.Pagination.descending === true) {
          dd = undefined
          this.gridView.Pagination.sortBy = undefined
        } else if (this.gridView.Pagination.descending === false) {
          dd = true
        } else if (this.gridView.Pagination.descending === undefined) {
          dd = false
        }
      } else {
        this.gridView.Pagination.sortBy = column
      }
      this.gridView.Pagination.descending = dd
    },
    sortClass(header) {
      let descIcon = ''
      !this.gridView.Pagination.descending ||
        (descIcon = this.gridView.Pagination.descending ? 'desc' : 'asc')
      let headerClass = ''
      !header.sortable ||
        (headerClass = [
          'column sortable',
          descIcon,
          header.value === this.gridView.Pagination.sortBy ? 'active' : ''
        ])
      return headerClass
    },
    /**
     * ajax加载事件，如果有loadAction 则替换当前对象
     */
    loadData() {
      this.axios
        .extendGet(this.gridView.GetMapping, {
          vagueSearch: this.vagueSearch,
          ...this.formObject,
          ...this.gridView.Pagination
        })
        .then(data => {
          this.desserts = data.list
          this.totalRows = data.total
        })
    }
  },
  watch: {
    'gridView.Pagination': {
      handler(pagination) {
        // 查询
        this.loadData()
      },
      deep: true
    },
    loadAction(fun) {
      if (fun) {
        this.loadData = fun
      }
    }
  }
}
</script>

<style scoped>
</style>

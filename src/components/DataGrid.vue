<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-items>
        <v-btn
          v-for="(btnItem,index) in customButton"
          :key="index"
          flat
          :to="btnItem.to? btnItem.to:undefined"
          @click.native="btnItem.clickEvent"
        >{{btnItem.text}}</v-btn>
        <v-btn
          v-if="btnAdd"
          flat
          :to="clickBtnAdd? undefined: addPath"
          @click.native="clickBtnAdd"
        >{{$t("btnAdd")}}</v-btn>
        <v-btn v-if="btnUpd" flat :to="updPath">{{$t("btnUpd")}}</v-btn>
        <v-btn v-if="btnDel" flat @click.native="btnDelClick">{{$t("btnDel")}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-text-field
        @click:append="vagueSearchClick"
        v-model="vagueSearch"
        append-icon="search"
        :label="$t('vagueSearch')"
        single-line
        hide-details
      ></v-text-field>
    </v-toolbar>
    <!-- <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field @click:append="vagueSearchClick" v-model="vagueSearch" append-icon="search" :label="$t('vagueSearch')" single-line hide-details></v-text-field>
    </v-card-title>-->
    <v-data-table
      :select-all="gridView.FirstCheck"
      class="elevation-1"
      :pagination.sync="gridView.Pagination"
      :headers="gridView.Columns"
      :items="desserts"
      :item-key="gridView.Id"
      :total-items="totalRows"
      v-model="selected"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th v-show="gridView.FirstCheck">
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.native="toggleAll(props)"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="sortClass(header)"
            @click="header.sortable?changeSort(header.value): undefined"
          >
            {{ $t(header.text) }}
            <v-icon small>arrow_upward</v-icon>
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td v-show="gridView.FirstCheck">
            <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
          </td>
          <td v-for="(gvColumn,i) in gridView.Columns " :key="i " :class="gvColumn.ColumnClass ">
            <template v-if="gvColumn.IsEdit">
              <!-- 编辑 -->
              <component
                @transferSnack="transferSnack"
                v-bind:is="editControl(gvColumn.ColumnEdit)"
                v-model="props.item[gvColumn.DataField]"
                :gv-column="gvColumn"
                :data-row="props.item"
              ></component>
            </template>
            <template
              v-else-if="!gvColumn.IsEdit"
            >{{displayColumn(props.item[gvColumn.DataField],gvColumn)}}</template>
          </td>
        </tr>
      </template>
      <v-alert
        slot="no-results"
        :value="true"
        color="error"
        icon="warning"
      >"{{ vagueSearch }} "{{$t('noResults')}}"{{searchErr}}"</v-alert>
    </v-data-table>
    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <v-btn flat @click="snack = false">{{$t('toasted.close')}}</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import GridView from '../commons/grid-view.js'
import _ from 'lodash'
import ToastedUtils from '../utils/toasted-utils.js'
import DataColumnEditInput from './DataColumnEditInput.vue'
import DataColumnEditSelect from './DataColumnEditSelect.vue'
/**
 * 自定义v-data-table
 */
export default {
  model: {
    prop: 'gridView'
  },
  props: {
    gridView: {
      // 校验是否 grid-view对象
      validator: value => {
        if (value === undefined) return true
        return GridView.prototype.isPrototypeOf(value)
      },
      required: true
    },
    /**
     * 自定义加载事件，优先级高于getMapping
     */
    loadAction: {
      type: Function
    },
    /**
     * 标准按钮列表[add,upd,del,exp]
     */
    buttonItem: {
      type: Array
    },
    /**
     * 自定义按钮 ActionButton list
     */
    customButton: {
      type: Array
    },
    /**
     * 显示新增
     */
    btnAdd: {
      type: Boolean,
      default: true
    },
    /**
     * 新增事件，如果为空则会进行to跳转
     */
    clickBtnAdd: {
      default: undefined
    },
    /**
     * 显示修改
     */
    btnUpd: {
      type: Boolean,
      default: true
    },
    /**
     * 显示删除
     */
    btnDel: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    // 查询错误信息
    searchErr: undefined,
    dataGridView: undefined,
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
    totalRows: undefined,
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
    gridView: {
      handler(value) {
        this.dataGridView = value
      },
      deep: true
    },
    dataGridView: {
      handler(value) {
        !value || this.$emit('input', value)
      },
      deep: true
    },
    'gridView.Pagination': {
      handler(value) {
        // 查询
        this.loadData()
      },
      deep: true
    },
    loadAction(fun) {
      if (fun) {
        this.loadData = fun
      }
    },
    selected: {
      handler(value) {
        if (!this.gridView.FirstCheck && this.selected.length > 1) {
          // 单选
          this.selected = [_.last(this.selected)]
          return
        }
        this.$emit('eventChange', this.selected)
      },
      deep: true
    },
    formObject() {
      this.loadData()
    }
  },
  computed: {
    addPath() {
      return `${this.$route.path}/add`
    },
    updPath() {
      if (this.selected.length > 0) {
        return `${this.$route.path}/upd/${this.selected[0][this.gridView.Id]}`
      } else {
        return undefined
      }
    }
  },
  methods: {
    /**
     * 自定义显示列加载事件
     */
    displayColumn(value, item) {
      if (item.displayEvent) {
        return item.displayEvent(value)
      }
      return value
    },
    /**
     * 小吃吧调用
     */
    transferSnack(snackValue) {
      this.snack = snackValue.snack
      this.snackColor = snackValue.snackColor
      this.snackText = snackValue.snackText
    },
    /**
     * 模糊查询
     */
    vagueSearchClick() {
      if (this.dataGridView.pagination.page !== 1) {
        this.$set(this.dataGridView.Pagination, 'page', 1)
      } else {
        this.loadData()
      }
    },
    /**
     * 全选
     */
    toggleAll(props) {
      if (!props.all) {
        this.selected = this.desserts.slice()
      } else {
        this.selected = []
      }
    },
    /**
     * 改变排序
     */
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
    /**
     * 生成列标头样式
     */
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
      this.$axios
        .extendGet(this.gridView.GetMapping, {
          vagueSearch: this.vagueSearch,
          ...this.formObject
        }, this.gridView.Pagination)
        .then(data => {
          this.desserts = data.rows
          this.totalRows = data.count
        }).catch(err => {
          this.searchErr = err.message
          this.desserts = undefined
          this.totalRows = 0
        })
    },
    /**
     * 删除按点击删除事件
     */
    btnDelClick() {
      if (this.selected.length <= 0) return
      let ids = _(this.selected)
        .map(p => p.id)
        .value()
      this.$axios
        .post(this.dataGridView.DelMapping, ids)
        .then(data => {
          this.loadData()
          this.$toasted.success(
            this.$t('toasted.delSuccess'),
            ToastedUtils.SuccessOption
          )
        })
        .catch(err => console.log(err))
    },
    /**
     * 获取编辑组件
     */
    editControl(dataGridColumnEdit) {
      switch (dataGridColumnEdit.EditType) {
        case 'input':
          return DataColumnEditInput
        case 'select':
          return DataColumnEditSelect
        default:
          return undefined
      }
    }
  }
}
</script>

<style scoped>
</style>

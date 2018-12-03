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
          :clickBtnAdd="clickBtnAdd"
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
    <!-- 类别新增 弹出窗口 -->
    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex
                xs12
                sm6
                md4
              >
                <v-text-field
                  v-model="editedItem.dictionaryCode"
                  :label="$t('dictionaryCode')"
                ></v-text-field>
              </v-flex>
              <v-flex
                xs12
                sm6
                md4
              >
                <v-text-field
                  v-model="editedItem.dictionaryDisplay"
                  :label="$t('dictionaryDisplay')"
                ></v-text-field>
              </v-flex>
              <v-flex
                xs12
                sm6
                md4
              >
                <v-text-field
                  v-model="editedItem.remark"
                  :label="$t('remark')"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            flat
            @click="close"
          >取消</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="clickSave"
          >保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    dialog: false,
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
    editedItem: {},
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
    },
    // 新增按钮点击事件
    clickBtnAdd() {
      this.editedItem = {}
      this.dialog = true
    },
    // 保存按钮点击事件
    clickSave() {

    }
  }
}
</script>

<style scoped>
</style>

<template>
  <v-container fluid grid-list-xl>
    <!-- Advertisement 广告 -->
    <!-- <v-subheader>{{$t('advertisement')}}</v-subheader> -->
    <w-data-grid
      ref="dg"
      :grid-view="gridview"
      :custom-button="btnList"
      :btn-add="false"
      :btn-upd="false"
      :btn-del="false"
    ></w-data-grid>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="headline">状态审批</v-card-title>
        <v-card-text>
          <v-select v-model="shiroRole" :items="shiroRolesList" label="状态"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">取消</v-btn>
          <v-btn color="green darken-1" flat @click="shiroRolesSubmit">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// 组件
import DataGrid from '../../components/DataGrid.vue'
import GridView from '../../commons/grid-view.js'
import DataGridColumn from '../../commons/data-grid-column.js'
import ToastedUtils from '../../utils/toasted-utils.js'
import _ from 'lodash'

const srList = [
  { text: '游客', value: 10 },
  { text: '普通用户', value: 20 },
  { text: '会员', value: 30 },
  { text: '黑名单', value: -10 }
]
/**
 * 用户管理
 */
export default {
  components: {
    'w-data-grid': DataGrid
  },
  data: () => ({
    dialog: false,
    shiroRolesList: srList,
    gridview: new GridView({
      columns: [
        new DataGridColumn({ text: '用户名', value: 'userName' }),
        new DataGridColumn({ text: '真实姓名', value: 'realName' }),
        new DataGridColumn({ text: '身份证号', value: 'idNumber' }),
        new DataGridColumn({ text: '邀请码', value: 'invitationCode' }),
        new DataGridColumn({ text: '身份',
          value: 'shiroRoles',
          displayEvent: (value) => {
            return _(srList).filter(p => p.value === value).map(p => p.text).take().value()[0]
          } }),
        new DataGridColumn({ text: '审批人', value: 'shiro_user' }),
        new DataGridColumn({ text: '审批时间', value: 'shiro_time' }),
        new DataGridColumn({ text: '审批备注', value: 'shiro_remark' })
      ],
      getMapping: '/app-user/find',
      delMapping: '/app-user/del'
    }),
    shiroRole: undefined,
    btnList: []
  }),
  created() {
    this.btnList = [{ text: '状态审批', clickEvent: this.setShiroRoles }]
  },
  methods: {
    setShiroRoles() {
      const row = this.$refs.dg.selected
      if (row === undefined || row.length <= 0) {
        return this.$toasted.info(
          '请选择要审批状态的行数据！',
          ToastedUtils.InfoOption
        )
      }
      this.dialog = true
    },
    shiroRolesSubmit() {
      this.$axios.post('/app-user/shiro-roles', { ids: _(this.$refs.dg.selected).map(p => p.id).value(), shiroRole: this.shiroRole })
        .then((result) => {
          this.$refs.dg.loadData()
        }).catch((err) => {
          console.log(err)
        }).finally(f => {
          this.dialog = false
        })
    }
  }
}
</script>

<style scoped>
</style>

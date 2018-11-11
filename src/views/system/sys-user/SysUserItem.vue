<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg4 xl3>
          <v-text-field :label="$t('userName')" v-model="formDo.userName" :rules="formUtils.rules()" counter="50" clearable required validate-on-blur></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 lg4 xl3>
          <v-text-field :label="$t('userCode')" v-model="formDo.userCode" :rules="formUtils.rules()" counter="50" clearable required validate-on-blur></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 lg12 xl12>
          <v-textarea :label="$t('notes')" v-model="formDo.notes" counter="200" clearable></v-textarea>
        </v-flex>
        <v-flex>
          <v-btn :loading="loading" :disabled="loading" color="primary" @click.native="submitClick">{{$t('btnSubmit')}}</v-btn>
          <v-btn @click.native="$router.go(-1)">{{$t('btnCancel')}}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import FormUtils from '../../../utils/form-utils.js'
import ToastedUtils from '../../../utils/toasted-utils.js'
/**
 * 用户新增、修改
 */
export default {
  data: () => ({
    valid: false,
    loading: false,
    formDo: {
      userName: undefined,
      userCode: undefined,
      notes: undefined
    },
    formUtils: new FormUtils()
  }),
  created() {
    this.initPage()
  },
  methods: {
    /**
     * 初始化页面加载
     */
    initPage() {
      if (!this.$route.params.id) return
      this.initformDo(this.$route.params.id)
    },
    /**
     * 根据入参获取当前页面formDo
     */
    initformDo(id) {
      this.$axios
        .get(`sys-user/find/${id}`)
        .then(p => (this.formDo = p))
        .catch(error => console.log(error.message))
    },
    /**
     * 保存按钮
     */
    submitClick() {
      if (!this.$refs.form.validate()) {
        return this.$toasted.info(
          this.$t('toasted.rules'),
          ToastedUtils.InfoOption
        )
      }
      this.loading = true
      // 登陆请求
      this.$axios
        .post('sys-user/save', this.formDo)
        .then(p => {
          this.$toasted.success(
            this.$t('toasted.saveSuccess'),
            ToastedUtils.SuccessOption
          )
          this.$router.go(-1)
        })
        .catch(error => {
          this.loading = false
          this.$toasted.error(error.message, ToastedUtils.ErrorOption)
        })
    }
  }
}
</script>

<style scoped>
</style>

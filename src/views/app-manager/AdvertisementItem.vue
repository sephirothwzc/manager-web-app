<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg4 xl3>
          <v-text-field :label="$t('title')" v-model="formDo.title" :rules="formUtils.rules()" counter="50" clearable required validate-on-blur></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 lg4 xl3>
          <v-text-field :label="$t('content')" v-model="formDo.content" :rules="formUtils.rules()" counter="50" clearable required validate-on-blur></v-text-field>
        </v-flex>
        <!-- toptip -->
        <v-flex xs12 sm6 lg4 xl3>
          <v-text-field :label="$t('toptip')" v-model="formDo.toptip" :rules="formUtils.rules({maxLength:50})" counter="50" clearable validate-on-blur></v-text-field>
        </v-flex>
        <!-- sortNumber -->
        <v-flex xs12 sm6 lg4 xl3>
          <v-text-field mask="#########" :label="$t('sortNumber')" v-model="formDo.sortNumber" :rules="formUtils.rules({maxLength:9})" counter="9" clearable validate-on-blur></v-text-field>
        </v-flex>
        <!-- advertType -->
        <v-flex xs12 sm6 lg4 xl3>
          <v-select item-text="dictionaryItem" item-value="dictionaryDisplay" :label="$t('advertType')" :items="advertTypeItems"></v-select>
        </v-flex>
        <v-flex xs12 sm12 lg12 xl12>
          <v-textarea :label="$t('toUrl')" v-model="formDo.toUrl" :rules="formUtils.rules({maxLength:2000})" counter="2000" clearable></v-textarea>
        </v-flex>
        <!-- imageUrl -->
        <v-flex xs12 sm12 lg12 xl12>
          <v-textarea :label="$t('imageUrl')" v-model="formDo.imageUrl" :rules="formUtils.rules({maxLength:2000})" counter="2000" clearable></v-textarea>
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
import FormUtils from '../../utils/form-utils.js'
import ToastedUtils from '../../utils/toasted-utils.js'
/**
 * 广告轮播图新增
 */
export default {
  data: () => ({
    valid: false,
    loading: false,
    formUtils: new FormUtils(),
    formDo: {
      id: undefined,
      title: undefined,
      content: undefined,
      toUrl: undefined,
      imageUrl: undefined
    },
    // 广告类别
    advertTypeItems: []
  }),
  created() {
    this.initPage()
  },
  methods: {
    /**
     * 初始化页面加载
     */
    initPage() {
      this.initData()
      if (!this.$route.params.id) return
      this.initformDo(this.$route.params.id)
    },
    /**
     * 加载页面需要的数据
     */
    initData() {
      this.$axios
        .get(`data-dictionary/find/advertType`)
        .then(p => (this.advertTypeItems = p))
        .catch(error => console.log(error.message))
    },
    /**
     * 根据入参获取当前页面formDo
     */
    initformDo(id) {
      this.$axios
        .get(`app-advertisement/find/${id}`)
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
      this.$axios
        .post('app-advertisement/save', this.formDo)
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

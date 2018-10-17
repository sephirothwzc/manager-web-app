<template>
  <!-- v-app vuetify 的根节点，所有vuetify的控件的根结点必须是v-app -->
  <v-app>
    <!-- v-container 中心聚焦的页面 fluid扩展中心区域 100%宽度 指定栅格的布局默认采用 xl 4k屏幕 > 1904px -->
    <v-container fluid grid-list-xl>
      <!-- v-layout 栅格布局 上下居中 左右居中 行 全部高度  -->
      <v-layout align-center justify-center row fill-height>
        <!-- v-flex 单元格布局12分格 -->
        <v-flex xs12 sm6 align-end flexbox>
          <!-- v-card 卡片 语法糖用于快速构建组件 -->
          <v-card>
            <!-- v-carousel 轮播组件 -->
            <v-carousel ref="carousel">
              <!-- v-carousel-item 轮播图片item  src图片属性 -->
              <!-- v-for array循环 key代表唯一主键有且只有唯一 -->
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
            <!-- title 卡片标题区域 -->
            <v-card-title primary-title>
              <!-- 聚焦显示区域 -->
              <v-container fluid grid-list-md>
                <div>
                  <h3 class="headline mb-0">{{$t('appTitle')}}</h3>
                  <!-- form 语法糖用于校验等操作 -->
                  <v-form v-model="valid" ref="form">
                    <v-layout justify-end row>
                      <v-flex xs12 sm6 lg6 xl6>
                        <!-- v-text-field 输入框 -->
                        <!-- rules formUtils.rulesRequired 必填方法 -->
                        <v-text-field v-model="userName" :rules="formUtils.rules()" :label="$t('userName')"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 lg6 xl6>
                        <!-- type类型文本框还是密码 @click 事件绑定methods或者直接写方法体 -->
                        <!-- :rules 校验规则，调用封装的 form-utils对象的方法 -->
                        <v-text-field v-model="passWord" :type="showPW ? 'text' : 'password'" @click:append="showPW = !showPW" :append-icon="showPW ? 'visibility_off' : 'visibility'" :rules="formUtils.rules({length:5})" :label="$t('passWord')"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </div>
              </v-container>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange" @click="clickSubmit">
                <span v-show="!sumbitStart">{{$t('btnSubmit')}}</span>
                <v-progress-circular color="red" v-show="sumbitStart" :size="24" :width="2" indeterminate></v-progress-circular>
              </v-btn>
              <v-btn flat color="orange" @click="clickCancel">{{$t('btnCancel')}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
// 引用自定义封装的对象
import FormUtils from '../utils/form-utils.js'
import ToastedUtils from '../utils/toasted-utils.js'
/**
 * 1. 所有的属性 :src= 为例 冒号代表绑定vue变量，src= 为例 代表绑定字符串值
 * 2. {{}} 代表显示（单向绑定） 支持vue props(入参)、data(数据)、computed(计算属性)等 vue属性
 * 3. v-model双向绑定
 */
/**
 * 登录
 */
export default {
  data() {
    return {
      // 辅助类
      formUtils: new FormUtils(),
      // form校验属性
      valid: false,
      // 提交状态
      sumbitStart: false,
      // 密码显示
      showPW: false,
      userName: undefined,
      passWord: undefined,
      // 轮播图数据源 从后端获取 增加了mockjs 使用 保留一张默认页面
      items: [
        {
          src: '/images/carousel/squirrel.jpg'
        }
      ]
    }
  },
  /**
   * 初始化方法只加载1次
   */
  mounted() {
    // 加载页面初始化内容
    this.pageInit()
  },
  methods: {
    /**
     * 加载页面
     */
    pageInit() {
      this.axios.extendGet('image/login-carousel').then(data => {
        this.items = data
      })
    },
    /**
     * 确定按钮点击事件
     */
    clickSubmit() {
      // 如果在登陆返回 防止重复提交
      if (this.sumbitStart) return
      // 校验规则
      if (!this.$refs.form.validate()) {
        return this.$toasted.info(
          this.$t('toasted.rules'),
          ToastedUtils.InfoOption
        )
      }
      // 设置登陆状态
      this.sumbitStart = true
      // 登陆请求
      this.axios
        .post('sys-user/login', {
          userName: this.userName,
          passWord: this.passWord
        })
        .then(p => this.$router.push('/'))
        .catch(error => {
          this.sumbitStart = false
          this.$toasted.error(error.message, ToastedUtils.ErrorOption)
        })
    },
    /**
     * 取消按钮点击事件
     */
    clickCancel() {}
  }
}
</script>

<style scoped>
</style>

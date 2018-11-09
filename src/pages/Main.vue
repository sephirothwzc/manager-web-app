<template>
  <v-app>
    <!-- 主左侧导航 -->
    <v-navigation-drawer :disable-route-watcher="true" persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
      <!-- 头像 -->
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src.sync="comUser.headPortrait">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{comUser.realName}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <!-- list列表 -->
      <v-list>
        <!-- 循环用标签 -->
        <template v-for="(item, i) in navItems">
          <!-- 不包含二级菜单 -->
          <v-list-tile value="true" v-if="!item.children" :key="i" :to="`/${item.path}`">
            <!-- 标题头 icon -->
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <!-- 标题文本 -->
            <v-list-tile-content>
              <v-list-tile-title v-text="$t(item.title)"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group v-if="item.children" :prepend-icon="item.icon" :value="i === 0" :key="i">
            <v-list-tile slot="activator">
              <v-list-tile-title v-text="$t(item.title)"></v-list-tile-title>
            </v-list-tile>
            <!-- 循环用标签 -->
            <template v-for="(citem, x) in item.children">
              <!-- 不包含二级菜单 -->
              <v-list-tile value="true" v-if="!citem.children" :key="x" :to="`/${item.path}/${citem.path}`">
                <!-- 标题头 icon -->
                <v-list-tile-action>
                  <v-icon v-html="citem.icon"></v-icon>
                </v-list-tile-action>
                <!-- 标题文本 -->
                <v-list-tile-content>
                  <v-list-tile-title v-text="$t(citem.title)"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-group no-action sub-group v-if="citem.children" value="true" :key="x">
                <v-list-tile slot="activator">
                  <v-list-tile-title v-text="$t(citem.title)"></v-list-tile-title>
                </v-list-tile>
                <v-list-tile value="true" v-for="(threeitem, t) in citem.children" :key="t" :to="`/${item.path}/${threeitem.path}`">
                  <!-- 标题文本 -->
                  <v-list-tile-content>
                    <v-list-tile-title v-text="$t(threeitem.title)"></v-list-tile-title>
                  </v-list-tile-content>
                  <!-- 标题头 icon -->
                  <v-list-tile-action>
                    <v-icon v-html="threeitem.icon"></v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </template>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- 标题栏 -->
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>fas fa-globe</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>fas fa-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- 内容区域 -->
    <v-content>
      <v-container fluid>
        <!-- <v-progress-linear v-if="ajaxLoad" :indeterminate="true" :active="ajaxLoad" height="3"></v-progress-linear> -->
        <w-nav-breadcrumbs></w-nav-breadcrumbs>
        <transition name="scale-transition">
          <router-view/>
        </transition>
      </v-container>
    </v-content>
    <!-- 右侧区域 用于消息列表 -->
    <!-- <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>fas fa-exchange-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <!-- 页脚 -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
      <v-progress-linear color="secondary" height="2" value="15" v-if="ajaxLoad" :indeterminate="true" :active="ajaxLoad"></v-progress-linear>
    </v-footer>
  </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import NavBreadcrumbs from '../components/main/NavBreadcrumbs.vue'
const { mapState, mapActions } = createNamespacedHelpers('Main')
/**
 * 主页
 */
export default {
  components: {
    'w-nav-breadcrumbs': NavBreadcrumbs
  },
  data() {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      // 导航菜单数据源，图标、链接、名称（i18n）
      navItems: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    // 解构vuex状态绑定
    ...mapState({
      ajaxLoad: state => state.ajaxLoad
    }),
    comUser() {
      return this.$store.getters['Main/User']
    }
  },
  created() {
    // this.$store.getters['Main/User'] || this.$router.push('/login')
  },
  mounted() {
    this.pageInit()
  },
  methods: {
    ...mapActions(['loginSuccess', 'logoutSuccess']),
    pageInit() {
      // 加载导航
      this.$axios
        .get(`sys-user/navigation`)
        .then(data => (this.navItems = data))
    }
  }
}
</script>

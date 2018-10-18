<template>
  <v-app>
    <!-- 主左侧导航 -->
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <!-- 头像 -->
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <!-- list列表 -->
      <v-list>
        <!-- 循环用标签 -->
        <template v-for="(item, i) in navItems">
          <!-- 不包含二级菜单 -->
          <v-list-tile value="true" v-if="!item.children" :key="i">
            <!-- 标题头 icon -->
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <!-- 标题文本 -->
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group v-if="item.children" :prepend-icon="item.icon" value="true" :key="i">
            <v-list-tile slot="activator">
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile>
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
      <v-progress-linear v-if="ajaxLoad" :indeterminate="true" :active="ajaxLoad" height="3"></v-progress-linear>
      <transition name="scale-transition">
        <router-view/>
      </transition>
    </v-content>
    <!-- 右侧导航 -->
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>fas fa-exchange-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- 页脚 -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('Main')
/**
 * 主页
 */
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      // 导航菜单数据源，图标、链接、名称（i18n）
      navItems: [
        {
          icon: 'fas fa-shapes',
          title: 'Inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    // 解构状态绑定
    ...mapState({
      ajaxLoad: state => state.ajaxLoad
    })
  },
  mounted() {
    this.pageInit()
  },
  methods: {
    pageInit() {
      // 加载导航
      this.axios.get(`sys-user/navigation`).then(data => (this.navItems = data))
    }
  }
}
</script>

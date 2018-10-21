<template>
  <div>
    <v-breadcrumbs divider="-">
      <v-breadcrumbs-item v-for="(item,i) in NavItems" :key="item.key" :disabled="i > NavItems.length-1" :href="item.path">
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>
</template>

<script>
import jslinq from 'jslinq'
/**
 * 面包屑导航
 */
export default {
  data: () => ({}),
  computed: {
    NavItems() {
      if (!this.$route.matched) return undefined
      let tempPath = ''
      let fullpath = this.$route.matched[this.$route.matched.length - 1].path
      let list = fullpath.split('/')
      return jslinq(list)
        .where(p => p)
        .select(p => {
          tempPath = `${tempPath}/${p}`
          return {
            key: p,
            text: this.$t(p),
            path: tempPath
          }
        })
        .toList()
    }
  },
  methods: {
    toPath(path) {
      this.$route.push(path)
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div>
    <v-breadcrumbs divider="-" :items="NavItems">
    </v-breadcrumbs>
  </div>
</template>

<script>
import _ from 'lodash'
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
      return _(list)
        .filter(p => p)
        .map(p => {
          tempPath = `${tempPath}/${p}`
          return {
            key: p,
            text: this.$t(p),
            href: tempPath,
            disabled: false
          }
        })
        .value()
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

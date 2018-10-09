<template>
  <v-app>
    {{$t(message)}}
  </v-app>
</template>

<script>
/**
 * 临时登录页面
 */
export default {
  data() {
    return {
      message: 'tempMessage'
    }
  }
}
</script>

<style scoped>
</style>

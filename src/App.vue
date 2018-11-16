<template>
  <transition name="scale-transition">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>

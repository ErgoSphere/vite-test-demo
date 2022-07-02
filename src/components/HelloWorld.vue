<script lang="ts" setup>
import {onBeforeRouteLeave} from "vue-router";

defineProps({
  msg: String
})

const count = ref(0)

const showMsg = () => {
  ElMessage('this is a message.')
}

onBeforeRouteLeave((to, from, next) => {
  console.log(1234)
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <button type="button" @click="showMsg">showMsg</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

<template>
  <div>
    <h2>Home View</h2>
    <button @click="goAboutPage" class="btn btn-primary">About 이동</button>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log('route.path: ', route.path)

const goAboutPage = () => {
  router.push('/about')
}
</script>
<style lang="scss"></style>

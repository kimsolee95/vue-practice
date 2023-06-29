<template>
  <div>
    <h2>Home View</h2>
    <button @click="goAboutPage" class="btn btn-primary">About 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppCard from '@/components/AppCard.vue'
import AppGrid from '@/components/AppGrid.vue'

const route = useRoute()
const router = useRouter()
console.log('route.path: ', route.path)

const goAboutPage = () => {
  router.push('/about')
}

const items = ref(['사과', '딸기', '포도', '바나나'])
</script>
<style lang="scss"></style>

<template>
  <!-- pagination -->
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="isPrevPage" class="page-item">
        <a @click.prevent="$emit('page', currentPage - 1)" class="page-link" href="#">Previous</a>
      </li>
      <li
        v-for="page in pageCount"
        :key="page"
        :class="{ active: currentPage === page }"
        class="page-item"
      >
        <a class="page-link" href="#" @click.prevent="$emit('page', page)">{{ page }}</a>
      </li>
      <li :class="isNextPage" class="page-item">
        <a @click.prevent="$emit('page', currentPage + 1)" class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  }
})

defineEmits(['page'])

const isPrevPage = computed(() => ({ disabled: !(props.currentPage > 1) }))
const isNextPage = computed(() => ({ disabled: !(props.currentPage < props.pageCount) }))
</script>
<style lang="scss"></style>

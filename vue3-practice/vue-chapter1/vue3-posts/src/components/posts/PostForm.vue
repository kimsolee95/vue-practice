<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="content"
        rows="3"
      ></textarea>
    </div>

    <div class="pt-4">
      <button type="button" @click="goDetailPage" class="btn btn-outline-danger me-2">취소</button>
      <button class="btn btn-primary">수정</button>
    </div>
    <slot name="actions"> </slot>
  </form>
</template>
<script setup>
defineProps({
  title: String,
  content: String
})

defineEmits(['update:title', 'update:content'])
</script>
<style lang="scss"></style>

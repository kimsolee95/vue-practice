<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="savePost">
      <!-- slot -->
      <template #actions>
        <button type="button" @click="goListPage" class="btn btn-outline-dark">목록</button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue'

import { useRouter } from 'vue-router'
import { createPost } from '@/api/posts'

import { ref } from 'vue'

const router = useRouter()
const form = ref({
  title: null,
  content: null
})

const savePost = () => {
  try {
    const data = {
      ...form.value,
      createdAt: Date.now()
    }
    createPost(data)
    router.push({ name: 'PostList' })
  } catch (error) {
    console.log(error)
  }
}

const goListPage = () => router.push({ name: 'PostList' })
</script>
<style lang="scss"></style>

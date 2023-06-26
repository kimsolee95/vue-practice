<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />

    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="editPost">
      <!-- slot -->
      <template #actions>
        <div class="pt-4">
          <button type="button" @click="goDetailPage" class="btn btn-outline-danger me-2">
            취소
          </button>
          <button class="btn btn-primary">수정</button>
        </div>
      </template>
    </PostForm>
  </div>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue'

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getPostById, updatePost } from '@/api/posts'

const route = useRoute()
const router = useRouter()
const postId = route.params.id

const form = ref({
  title: null,
  content: null
})

const fetchPost = async () => {
  const { data } = await getPostById(postId)
  setForm(data)
}

const setForm = ({ title, content, createdAt }) => {
  form.value.title = title
  form.value.content = content
  form.value.createdAt = createdAt
}

fetchPost()

const editPost = async () => {
  try {
    await updatePost(postId, { ...form.value })
    router.push({ name: 'PostDetail' })
  } catch (error) {
    console.log(error)
  }
}

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id: postId } })
</script>
<style lang="scss"></style>

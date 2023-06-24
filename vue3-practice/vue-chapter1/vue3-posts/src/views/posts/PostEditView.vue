<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />

    <form @submit.prevent="editPost">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input v-model="form.title" type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea v-model="form.content" class="form-control" id="content" rows="3"></textarea>
      </div>

      <div class="pt-4">
        <button type="button" @click="goDetailPage" class="btn btn-outline-danger me-2">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>
<script setup>
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

<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />

    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="editPost">
      <!-- slot -->
      <template #actions>
        <button type="button" @click="goDetailPage" class="btn btn-outline-danger me-2">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
    <AppAlert v-show="showAlert" />
  </div>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue'
import AppAlert from '@/components/AppAlert.vue'

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
    vAlert()
  } catch (error) {
    console.log(error)
  }
}

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id: postId } })

//alert
const showAlert = ref(false)
const vAlert = () => {
  showAlert.value = true
  setTimeout(() => {
    showAlert.value = false
  }, 2000)
}
</script>
<style lang="scss"></style>

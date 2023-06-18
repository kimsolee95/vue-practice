<template>
  <div>
    <h2>게시글 상세</h2>
    <p>내용</p>
    <p class="text-muted">2020-01-01</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>

      <div class="col-auto me-auto"></div>

      <div class="col-auto">
        <button @click="goListPage" class="btn btn-outline-dark">목록</button>
      </div>
      <div class="col-auto">
        <button @click="goEditPage(postId)" class="btn btn-outline-primary">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const postId = route.params.id

const goListPage = () => router.push({ name: 'PostList' })
const goEditPage = () => {
  router.push({ name: 'PostEdit', params: { id: postId } })
}
</script>
<style lang="scss"></style>

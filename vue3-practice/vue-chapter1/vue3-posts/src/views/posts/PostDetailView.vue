<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
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
        <button @click="goEditPage" class="btn btn-outline-primary">수정</button>
      </div>
      <div class="col-auto">
        <button @click="removePost" class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { getPostById, deletePost } from '@/api/posts'
import { onMounted, ref } from 'vue'

//const route = useRoute()
const router = useRouter()

const post = ref({})
//const postId = route.params.id

const props = defineProps({
  id: [String, Number]
})

onMounted(() => {
  //console.log(fetchPost())
})

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id)
    setPost(data)
  } catch (error) {
    console.log(error)
  }
}

const setPost = ({ title, content, createdAt }) => {
  post.value.title = title
  post.value.content = content
  post.value.createdAt = createdAt
}

fetchPost()

const removePost = async () => {
  try {
    if (confirm('삭제하시겠습니까?') === false) return

    await deletePost(props.id)
    router.push({ name: 'PostList' })
  } catch (error) {
    console.log(error)
  }
}

const goListPage = () => router.push({ name: 'PostList' })
const goEditPage = () => {
  router.push({ name: 'PostEdit', params: { id: props.id } })
}
</script>
<style lang="scss"></style>

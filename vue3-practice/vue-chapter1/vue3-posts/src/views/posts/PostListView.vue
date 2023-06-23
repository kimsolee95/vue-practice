<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
  </div>

  <div class="row">
    <div v-for="post in posts" :key="post.id" class="col-4">
      <PostItem
        :title="post.title"
        :content="post.content"
        :created-at="post.createdAt"
        @click="goPage(post.id)"
      >
      </PostItem>
    </div>
  </div>
  <hr class="my-4" />
  <AppCard>
    <PostDetailView :id="1" />
  </AppCard>
</template>
<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import AppCard from '@/components/AppCard.vue'

import { ref, onMounted } from 'vue'
import { getPosts } from '@/api/posts'
import { useRouter } from 'vue-router'

const router = useRouter()

const posts = ref([])

onMounted(() => {
  fetchPosts()
})

const fetchPosts = async () => {
  const { data } = await getPosts()
  posts.value = data
  // ({ data: posts.value } = await getPosts());
}

const goPage = (postId) => {
  //router.push(`/posts/${postId}`)
  router.push({
    name: 'PostDetail',
    params: {
      id: postId
    }
  })
}
</script>
<style lang="scss"></style>

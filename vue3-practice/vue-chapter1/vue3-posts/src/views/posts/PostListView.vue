<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <!-- search filter -->
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
        <div class="col-3">
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>
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

  <AppPagination
    :current-page="params._page"
    :page-count="pageCount"
    @page="(page) => (params._page = page)"
  />

  <template v-if="posts && posts.length > 0">
    <hr class="my-5" />
    <AppCard>
      <PostDetailView :id="posts[0].id" />
    </AppCard>
  </template>
</template>
<script setup>
import PostItem from '@/components/posts/PostItem.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import AppCard from '@/components/AppCard.vue'
import AppPagination from '@/components/AppPagination.vue'

import { ref, computed, watch, onMounted } from 'vue'
import { getPosts } from '@/api/posts'
import { useRouter } from 'vue-router'

const router = useRouter()

const posts = ref([])
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: ''
})
//pagination
const totalCount = ref(0)
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit))

onMounted(() => {
  fetchPosts()
})

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value)
    posts.value = data
    totalCount.value = headers['x-total-count']
  } catch (error) {
    console.log(error)
  }
  // ({ data: posts.value } = await getPosts());
}

watch(params.value, () => {
  fetchPosts()
})

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

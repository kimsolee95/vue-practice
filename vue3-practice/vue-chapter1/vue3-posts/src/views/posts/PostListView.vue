<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <!-- search filter -->
    <PostFilter v-model:title="params.title_like" v-model:limit="params._limit" />

    <hr class="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
          @modal="openModal(item)"
        />
      </template>
    </AppGrid>
  </div>

  <AppModal :show="show" :title="게시글" @click="closeModal">
    <template #default>
      <div class="row g-3">
        <div class="col-3 text-muted">제목</div>
        <div class="col-9">{{ modalTitle }}</div>
        <div class="col-3 text-muted">내용</div>
        <div class="col-9">{{ modalContent }}</div>
        <div class="col-3 text-muted">등록일</div>
        <div class="col-9">{{ modalCreatedAt }}</div>
      </div>
    </template>
    <template #actions>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">
        닫기
      </button>
    </template>
  </AppModal>

  <AppPagination
    :current-page="params._page"
    :page-count="pageCount"
    @page="(page) => (params._page = page)"
  />

  <!-- modal -->

  <!-- Modal -->

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
import PostFilter from '@/components/posts/PostFilter.vue'
import AppModal from '@/components/AppModal.vue'

import AppCard from '@/components/AppCard.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppGrid from '@/components/AppGrid.vue'

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

//modal
const show = ref(false)
const modalTitle = ref('')
const modalContent = ref('')
const modalCreatedAt = ref('')

const openModal = ({ title, content, createdAt }) => {
  show.value = true
  modalTitle.value = title
  modalContent.value = content
  modalCreatedAt.value = createdAt
}
const closeModal = () => {
  show.value = false
}
</script>
<style lang="scss"></style>

<template>
    <div class="card">
    <div class="card-body">
        <p>{{ $route.params.id }}</p>
        <p>상세페이지</p>
        <p>글 제목</p>
        <p>{{ item[$route.params.id].title }}</p>
        <p>글 내용</p>
        <p>{{ item[$route.params.id].content }}</p>
    </div>
    </div>
    
    <router-view></router-view>
    
</template>

<script>
export default {
    name: 'DetailView',
    props: {
        item : Array,
    }
}
</script>

<style>

</style>
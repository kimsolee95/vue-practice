<template>
    <div v-for="(info, idx) in item" :key="idx">
        <router-link to="/detail" :item="item">
            <h5>{{ info.title }}</h5>
        </router-link>
        <p>{{ info.date }}</p>
        <p>{{ info.content }}</p>
    </div>
</template>

<script>
export default {
    name: 'ListView',
    props: {
        item : Object
    },
}
</script>

<style>

</style>

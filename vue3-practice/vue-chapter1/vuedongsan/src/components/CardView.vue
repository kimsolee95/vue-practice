<template>
  <div>
    <img :src="item.image" class="room-img">
    <h4 @click="$emit('openModal', item.id)">{{ item.title }}</h4>
    <p> {{ item.price }} 원</p>
  </div>    
</template>

<script>
export default {

    name: 'CardView',
    props: {
        item: Object,
        modalActivate: Boolean,
        selectedOnerooms: Number,
    },
    methods: {
        openModalWithId() {
            this.$emit('openModal', this.item.id);
        }
    }

}
</script>

<style>

</style>

<template>
  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Launch static backdrop modal
  </button> -->
  <!-- Modal -->
  <!-- <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div> -->

  <div v-if="show">
    <div
      class="modal fade show d-block"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-modal="true"
      role="dialog"
      style="display: block"
    >
      <div class="modal-dialog __web-inspector-hide-shortcut__">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ title }}</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="$emit('close')"
              ></button>
            </slot>
          </div>
          <div class="modal-body">
            <slot> </slot>
          </div>
          <div class="modal-footer">
            <slot name="actions"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: String
})
defineEmits(['close'])
</script>

<style lang="scss" scoped></style>

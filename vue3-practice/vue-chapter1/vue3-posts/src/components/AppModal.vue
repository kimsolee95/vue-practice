<template>
  <div v-if="modelValue">
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
                @click="$emit('update:modalValue', false)"
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
  modelValue: Boolean,
  title: String
})
defineEmits(['close', 'update:modelValue'])
</script>

<style lang="scss" scoped></style>

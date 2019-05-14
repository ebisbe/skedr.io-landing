<template>
  <div class="page-header page-header-small">
    <div :style="bgImageStyle" :class="className" class="page-header-image" data-parallax="true" />
    <div class="content-center">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bgImage: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgImageStyle() {
      return this.bgImage !== '' ? `background: url('${this.bgImage}')` : ''
    }
  }
}
</script>

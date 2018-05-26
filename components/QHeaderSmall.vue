<template>
  <div class="page-header page-header-small">
    <div
      :style="`background-image: url('${bgImage}')`"
      class="page-header-image"
      data-parallax="true"
    />
    <div class="content-center">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'QHeaderSmall',
  props: {
    bgImage: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <div :class="{ container: useContainer }">
      <div v-if="title !== '' || desc !== ''" class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title" v-html="title" />
          <h4 v-if="desc !== ''" class="description" v-html="desc" />
          <a v-if="ctaLink" :href="cta_link" class="btn btn-primary btn-round" v-html="ctaText" />
          <slot name="pills" />
        </div>
      </div>
    </div>
    <div class="container">
      <slot name="container" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    useContainer: {
      type: Boolean,
      default: false
    },
    ctaLink: {
      type: String,
      default: ''
    },
    ctaText: {
      type: String,
      default: 'Read more'
    }
  }
}
</script>

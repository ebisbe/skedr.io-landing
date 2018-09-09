<template>
  <div>
    <div :class="{container: useContainer}">
      <div
        v-if="title !== '' || desc !== ''"
        class="row">
        <div
          class="col-md-8 ml-auto mr-auto text-center">
          <h2
            class="title"
            v-html="title"/>
          <h4
            class="description"
            v-html="desc"/>
          <a
            v-if="cta_link"
            :href="cta_link"
            class="btn btn-primary btn-round"
            v-html="cta_text"/>
        </div>
      </div>
    </div>
    <div class="container">
      <slot name="container"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QBlock',
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
    cta_link: {
      type: String,
      default: ''
    },
    cta_text: {
      type: String,
      default: 'Read more'
    }
  }
}
</script>

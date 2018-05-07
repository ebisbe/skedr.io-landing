<template>
  <div class="card card-plain">
    <div
      class="card-header">
      <a
        :class="showCollapse ? 'collapsed' : null"
        :aria-expanded="showCollapse ? 'true' : 'false'"
        :aria-controls="name"
        :href="'#' + name"
        data-toggle="collapse"
        @click.prevent="showCollapse = !showCollapse">
        {{ title }}
        <i class="now-ui-icons arrows-1_minimal-down"/>
      </a>
    </div>
    <b-collapse
      :id="name"
      :visible="visible"
      v-model="showCollapse">
      <div
        class="card-body"
        v-html="desc"/>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'DCollapse',
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showCollapse: false
    }
  },
  computed: {
    name() {
      return 'collapse-' + Math.round(Math.random() * 100000)
    }
  },
  created() {
    this.showCollapse = this.visible
  }
}
</script>

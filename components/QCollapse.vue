<template>
  <div id="accordion" role="tablist" aria-multiselectable="true" class="card-collapse">
    <div :id="name" class="card card-plain">
      <div class="card-header">
        <a
          :class="showCollapse ? 'collapsed' : null"
          :aria-expanded="showCollapse ? 'true' : 'false'"
          :aria-controls="name"
          :href="`#${name}`"
          data-toggle="collapse"
          data-parent="#accordion"
          @click.prevent="showCollapse = !showCollapse"
        >
          {{ title }}
          <i class="now-ui-icons arrows-1_minimal-down" />
        </a>
      </div>
      <b-collapse :id="name" v-model="showCollapse" :visible="visible">
        <div class="card-body" v-html="desc" />
      </b-collapse>
    </div>
  </div>
</template>

<script>
import _kebabCase from 'lodash/kebabCase'
export default {
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
      return _kebabCase(this.title)
    }
  },
  created() {
    this.showCollapse = this.visible
  },
  mounted() {
    if (process.browser) {
      if (window.location.href.includes(this.name)) {
        this.showCollapse = true
      }
    }
  }
}
</script>

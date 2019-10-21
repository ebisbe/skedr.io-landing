<template>
  <div v-if="user" class="card card-testimonial card-plain">
    <div class="card-avatar">
      <a :href="user.profileurl._content" target="_blank" rel="noopener">
        <img
          :src="`https://farm${user.iconfarm}.staticflickr.com/${user.iconserver}/buddyicons/${user.nsid}_r.jpg`"
          class="img img-raised rounded cover"
          :alt="user.realname._content"
        >
      </a>
    </div>
    <div class="card-body">
      <p class="card-title h3" v-html="user.realname._content" />
      <p class="category text-primary h6" v-html="`${totalPhotos} photos`" />
      <p class="card-description">
        "{{ testimonial }}"
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    testimonial: {
      type: String,
      required: true
    }
  },
  computed: {
    totalPhotos() {
      if (this.user.id === '55346444@N08') {
        return 1063
      } else {
        return this.user.photos.count._content
      }
    }
  }
}
</script>

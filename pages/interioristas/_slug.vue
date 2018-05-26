<template>
  <div class="wrapper profile-page">
    <div
      class="page-header page-header-small"
      filter-color="orange">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image: url('../assets/img/bg5.jpg') ;"/>
      <div class="content-center">
        <div class="photo-container">
          <img
            src="/assets/img/ryan.jpg"
            alt="">
        </div>
        <h3
          class="title"
          v-html="name"/>
        <p class="category">Interiorista</p>
        <div class="content">
          <div class="social-description">
            <h2 v-html="projects.length"/>
            <p>Proyectos</p>
          </div>
          <div class="social-description">
            <h2 v-html="projectValoration"/>
            <p>Valoracion</p>
          </div>
          <div class="social-description">
            <h2>4</h2>
            <p>Articulos</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a
            href="#button"
            class="btn btn-primary btn-round btn-lg">Follow</a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter">
            <i class="fa fa-twitter"/>
          </a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram">
            <i class="fa fa-instagram"/>
          </a>
        </div>
        <block
          :title="title"
          :desc="desc"
          :rows="images">
          <div
            slot-scope="{row, iteration}"
            :class="iteration > 2 ? 'col-md-6' : 'col-md-4'">
            <img
              :alt="row.desc"
              :src="row.path"
              style="margin: 20px 0px"
              class="rounded img-raised">
          </div>
        </block>
      </div>
    </div>
  </div>
</template>
<script>
import block from '~/components/QBlock'

export default {
  name: 'InterioristaSlug',
  components: { block },
  data() {
    return {
      name: 'Ignacio López',
      twitter: '',
      linkedin: '',
      title: 'Some crappy title for my description',
      desc:
        'Here are some pictures from our office. You can see the place looks like a palace and is fully equiped with everything you need to get the job done.',
      projects: [
        {
          valoration: 4
        },
        {
          valoration: 4
        }
      ],
      images: [
        { path: '/assets/img/bg27.jpg', desc: 'Raised Image' },
        { path: '/assets/img/bg24.jpg', desc: 'Raised Image' },
        { path: '/assets/img/bg28.jpg', desc: 'Raised Image' },
        { path: '/assets/img/project6.jpg', desc: 'Raised Image' },
        { path: '/assets/img/project14.jpg', desc: 'Raised Image' }
      ]
    }
  },
  computed: {
    projectValoration() {
      const total = this.projects
        .map(p => p.valoration)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      return `${total / this.projects.length} / 5`
    }
  }
}
</script>

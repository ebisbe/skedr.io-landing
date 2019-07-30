<template>
  <div class="wrapper">
    <q-header-small class-name="raw-pixel">
      <h1 class="title">
        <img :alt="$t('app_name')" src="/skedr-full-logo.png" height="100">
      </h1>
      <h3><strong v-html="totalShares" /> photos delivered from <strong v-html="totalUsers" /> Flickr users</h3>
    </q-header-small>
    <div class="">
      <div class="testimonials-3">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title" v-html="$t('home.atention.title')" />
              <h4 class="description" v-html="$t('home.atention.desc')" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <q-testimonial
                :user="user1"
                testimonial="Skedr.io can handle 80 to 90% of my work, considerably reducing my posting time."
              />
            </div>
            <div class="col-md-4">
              <q-testimonial
                :user="user2"
                testimonial="I like Skedr.io more than anything because it is easy to use and fast, something that in Flickr costs more to do."
              />
            </div>
            <div class="col-md-4">
              <q-testimonial
                :user="user3"
                testimonial="I recommend Skedr.io to anyone who loves to spend time taking photos instead of posting them in lots of Flickr groups."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="features-7 section-image sid-verma">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="col-sm-12">
                <div v-for="item in $t('home.interest')" :key="item.title" class="info info-horizontal">
                  <div class="icon">
                    <i :class="item.icon" class="now-ui-icons " />
                  </div>
                  <div class="description">
                    <h4 class="info-title" v-html="item.title" />
                    <p class="description" style="font-weight:400;" v-html="item.desc" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="image-container">
                <div class="device device-macbook device-spacegray">
                  <div class="device-frame">
                    <img class="device-content" src="~assets/img/View_autoimport_tags_desktop.png">
                  </div>
                  <div class="device-stripe" />
                  <div class="device-header" />
                  <div class="device-sensors" />
                  <div class="device-btns" />
                  <div class="device-power" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="features-6">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title" v-html="$t('home.desire.title')" />
            <h4 class="description" v-html="$t('home.desire.desc')" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div v-for="item in $t('home.desire.items').slice(0, 2)" :key="item.title" class="info info-horizontal">
              <div :class="item.color" class="icon">
                <i :class="item.icon" class="now-ui-icons" />
              </div>
              <div class="description">
                <h5 class="info-title" v-html="item.title" />
                <p v-html="item.desc" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="phone-container" style="height:600px;">
              <div class="device device-google-pixel device-black scale">
                <div class="device-frame">
                  <img class="device-content" src="~assets/img/View_photostream.png">
                </div>
                <div class="device-stripe" />
                <div class="device-header" />
                <div class="device-sensors" />
                <div class="device-btns" />
                <div class="device-power" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div v-for="item in $t('home.desire.items').slice(2, 4)" :key="item.title" class="info info-horizontal">
              <div :class="item.color" class="icon">
                <i :class="item.icon" class="now-ui-icons" />
              </div>
              <div class="description">
                <h5 class="info-title" v-html="item.title" />
                <p v-html="item.desc" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-block
      id="pricing"
      :title="$t('home.cta.title')"
      use-container
      class="subscribe-line subscribe-line-image aaron-burden"
    >
      <template slot="pills">
        <b-nav pills class="justify-content-center nav-pills-primary">
          <b-nav-item v-for="(price, index) in $t('home.cta.plans[1].price')" :key="index" :active="activePlan === index" @click="activePlan = index">
            {{ price.name }}
          </b-nav-item>
        </b-nav>
      </template>
      <template slot="container">
        <div class="row">
          <div
            v-for="(plan, index) in $t('home.cta.plans')"
            :key="plan.name"
            :class="{ 'col-md-4': true, 'mx-auto': true }"
          >
            <div
              :class="{ card: true, 'card-pricing': true, 'card-raised': index === 1 }"
              :data-background-color="index === 1 ? 'orange' : null"
            >
              <div class="card-body">
                <h5 class="category">
                  {{ plan.name }}&nbsp;<span v-if="plan.price" v-html="`(${plan.price[activePlan].name})`" />
                </h5>
                <h1 v-if="plan.price" class="card-title">
                  <small v-if="plan.price[activePlan].original_price"><del>{{ plan.price[activePlan].original_price }}&euro;</del></small> {{ plan.price[activePlan].price }}<small>&euro;/{{ activePlan }}</small>
                </h1>
                <h1 v-else class="card-title">
                  {{ plan.price_text }}
                </h1>
                <ul v-if="plan.features.length">
                  <li v-for="feature in plan.features" :key="feature" v-html="feature" />
                </ul>
                <a
                  :href="$t('home.cta.link')"
                  :class="index === 0 ? 'btn-primary' : 'btn-neutral'"
                  class="btn btn-round"
                >
                  {{ plan.cta }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="text-white ml-auto mr-auto text-center">
            <span>* Based on annual subscription</span>
          </div>
        </div>
      </template>
    </q-block>
    <div id="blogs-1" class="blogs-1">
      <div class="container">
        <div class="row">
          <div class="col-md-10 ml-auto mr-auto">
            <h2 class="title">
              Latest Blogposts
            </h2>
            <br>
            <div v-for="article of $t('articles')" :key="article.slug" class="card card-plain card-blog">
              <div class="row">
                <div class="col-md-5">
                  <div class="card-image">
                    <img :src="article.img" class="img img-raised rounded">
                  </div>
                </div>
                <div class="col-md-7">
                  <h3 class="card-title">
                    <a :href="`/articles/${article.slug}/`" v-html="article.title" />
                  </h3>
                  <p class="card-description" v-html="article.introduction" />
                  <p class="card-description">
                    <a :href="`/articles/${article.slug}/`"> Read More </a>
                  </p>
                  <p class="author">
                    by
                    <b v-html="article.author" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flickr from 'flickr-sdk'

import QHeaderSmall from '~/components/QHeaderSmall'
import QBlock from '~/components/QBlock'
import QTestimonial from '~/components/QTestimonial'

export default {
  components: { QHeaderSmall, QBlock, QTestimonial },
  data: () => ({
    timer: null,
    activePlan: 'mo'
  }),
  async asyncData({ $axios }) {
    const flickr = Flickr(process.env.NUXT_ENV_FLICKR_API_ID)
    const [totalShares, totalUsers, user1, user2, user3] = await Promise.all([
      $axios.$get('total-shares'),
      $axios.$get('total-users'),
      ...['66358983@N07', '91905103@N02', '55346444@N08'].map(user_id =>
        flickr.people
          .getInfo({ user_id: user_id })
          .then(({ body }) => body)
          .then(({ person }) => person)
      )
    ])
    return { totalShares, totalUsers, user1, user2, user3 }
  },
  mounted() {
    this.timer = setInterval(async () => {
      this.getTotals(this.$axios)
    }, 60000)
    this.getTotals(this.$axios)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    async getTotals(axios) {
      const [totalShares, totalUsers] = await Promise.all([axios.$get('total-shares'), axios.$get('total-users')])
      this.totalShares = totalShares
      this.totalUsers = totalUsers
    }
  },
  head() {
    return {
      title: this.$t('slogan'),
      meta: [{ hid: 'description', name: 'description', content: this.$t('home.atention.desc') }]
    }
  }
}
</script>

<style>
.raw-pixel {
  background-image: url(~assets/img/averie-woodard-111831-unsplash.jpg);
}
.sid-verma {
  background-image: url(~assets/img/sid-verma-396977-unsplash.jpg);
}
.aaron-burden {
  background-image: url(~assets/img/aaron-burden-269382-unsplash.jpg);
}
.card-avatar .cover {
  height: 100px;
  width: 100px;
  object-fit: cover;
}
.scale {
  transform-origin: top left;
  transform: scale(0.75) !important;
}
</style>

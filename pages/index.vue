<template>
  <div class="wrapper">
    <q-header-small class-name="raw-pixel">
      <h1 class="title">{{ $t('app_name') }} </h1>
      <h3><span v-html="$t('slogan')"/><br><span v-html="$t('slogan2')"/></h3>
    </q-header-small>
    <div class="">
      <br>
      <br>
      <div>
        <div class="col-md-8 mr-auto ml-auto text-center">
          <h2
            class="title"
            v-html="$t('home.atention.title')"/>
          <h4
            class="description"
            v-html="$t('home.atention.desc')"/>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="features-7 section-image sid-verma">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="col-sm-12">
                <div
                  v-for="item in $t('home.interest')"
                  :key="item.title"
                  class="info info-horizontal">
                  <div class="icon">
                    <i
                      :class="item.icon"
                      class="now-ui-icons "/>
                  </div>
                  <div class="description">
                    <h4
                      class="info-title"
                      v-html="item.title"/>
                    <p
                      class="description"
                      style="font-weight:400;"
                      v-html="item.desc" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="image-container">
                <div
                  class="device device-macbook device-spacegray">
                  <div class="device-frame">
                    <img
                      class="device-content"
                      src="~/assets/img/View_photostream_desktop_small.png">
                  </div>
                  <div class="device-stripe"/>
                  <div class="device-header"/>
                  <div class="device-sensors"/>
                  <div class="device-btns"/>
                  <div class="device-power"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="features"
      class="features-6">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2
              class="title"
              v-html="$t('home.desire.title')"/>
            <h4
              class="description"
              v-html="$t('home.desire.desc')"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div
              v-for="item in $t('home.desire.items').slice(0,2)"
              :key="item.title"
              class="info info-horizontal">
              <div
                :class="item.color"
                class="icon">
                <i
                  :class="item.icon"
                  class="now-ui-icons"/>
              </div>
              <div class="description">
                <h5
                  class="info-title"
                  v-html="item.title"/>
                <p v-html="item.desc"/>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="phone-container"
              style="height:600px;">
              <div
                class="device device-google-pixel device-black scale">
                <div class="device-frame">
                  <img
                    class="device-content"
                    src="~/assets/img/View_photostream.png">
                </div>
                <div class="device-stripe"/>
                <div class="device-header"/>
                <div class="device-sensors"/>
                <div class="device-btns"/>
                <div class="device-power"/>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              v-for="item in $t('home.desire.items').slice(2,4)"
              :key="item.title"
              class="info info-horizontal">
              <div
                :class="item.color"
                class="icon">
                <i
                  :class="item.icon"
                  class="now-ui-icons"/>
              </div>
              <div class="description">
                <h5
                  class="info-title"
                  v-html="item.title"/>
                <p v-html="item.desc"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <q-block
      id="pricing"
      :title="$t('home.cta.title')"
      :desc="$t('home.cta.desc')"
      use-container
      class="subscribe-line subscribe-line-image aaron-burden">
      <div
        slot="container"
        class="row">
        <div
          v-for="(plan, index) in $t('home.cta.plans')"
          :key="plan.name"
          :class="{ 'col-md-4': true, 'ml-auto': index === 0, 'mx-auto': index === 1 }">
          <div
            :class="{'card': true, 'card-pricing': true, 'card-raised': index === 1 }"
            :data-background-color="index === 1 ? 'orange' : null">
            <div class="card-body">
              <h5
                class="category"
                v-html="plan.name"/>
              <h1 class="card-title">Free</h1>
              <!-- <h1 class="card-title"><small>$</small> {{ plan.price }} <small>/mo</small></h1> -->
              <ul v-if="plan.features.length">
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                  v-html="feature"/>
              </ul>
              <a
                :href="$t('home.cta.link')"
                :class="index === 0 ? 'btn-primary' : 'btn-neutral'"
                class="btn btn-round">
                {{ $t('home.cta.text') }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </q-block>
    <div
      id="blogs-1"
      class="blogs-1">
      <div class="container">
        <div class="row">
          <div class="col-md-10 ml-auto mr-auto">
            <h2 class="title">Latest Blogposts</h2>
            <br>
            <div
              v-for="article of $t('articles')"
              :key="article.slug"
              class="card card-plain card-blog">
              <div class="row">
                <div class="col-md-5">
                  <div class="card-image">
                    <img
                      :src="article.img"
                      class="img img-raised rounded">
                  </div>
                </div>
                <div class="col-md-7">
                  <h3 class="card-title">
                    <a
                      :href="`/articles/${article.slug}`"
                      v-html="article.title"/>
                  </h3>
                  <p
                    class="card-description"
                    v-html="article.introduction"/>
                  <p class="card-description">
                    <a :href="`/articles/${article.slug}`"> Read More </a>
                  </p>
                  <p class="author">
                    by
                    <b v-html="article.author"/>
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
import QHeaderSmall from '~/components/QHeaderSmall'
import QBlock from '~/components/QBlock'

export default {
  components: { QHeaderSmall, QBlock },
  head() {
    return {
      title: this.$t('slogan'),
      meta: [{ hid: 'description', name: 'description', content: this.$t('home.attention.desc') }]
    }
  }
}
</script>

<style>
.raw-pixel {
  background-image: url(~/assets/img/averie-woodard-111831-unsplash.jpg);
}
.sid-verma {
  background-image: url(~/assets/img/sid-verma-396977-unsplash.jpg);
}
.aaron-burden {
  background-image: url(~/assets/img/aaron-burden-269382-unsplash.jpg);
}
.scale {
  transform-origin: top left;
  transform: scale(0.75) !important;
}
</style>

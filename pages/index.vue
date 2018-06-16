<template>
  <div class="wrapper">
    <q-header-small class-name="raw-pixel">
      <h1 class="title">Skedr.io</h1>
      <h3>Autoimport and autoschedule for Flickr Groups<br><strong>Rediscover</strong> your free time</h3>
    </q-header-small>
    <div class="">
      <br>
      <br>
      <div>
        <div class="col-md-8 mr-auto ml-auto text-center">
          <h2
            class="title"
            v-html="atention.title"/>
          <h4
            class="description"
            v-html="atention.desc"/>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="features-7 section-image sid-verma">
        <div class="container-fluid">
          <a name="features"/>
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="col-sm-12">
                <div
                  v-for="item in interest"
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
    <div class="features-6">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2
              class="title"
              v-html="desire.title"/>
            <h4
              class="description"
              v-html="desire.desc"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div
              v-for="item in desire.items.slice(0,2)"
              :key="item"
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
              v-for="item in desire.items.slice(2,4)"
              :key="item"
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
      :title="cta.title"
      :cta_link="cta.link"
      :cta_text="cta.text"
      use-container
      class="subscribe-line subscribe-line-image aaron-burden"/>

  </div>
</template>

<script>
import QHeaderSmall from '~/components/QHeaderSmall'
import QBlock from '~/components/QBlock'

export default {
  components: { QHeaderSmall, QBlock },
  data() {
    return {
      atention: {
        title: 'Make the most of every day',
        desc: 'The new Skedr app helps you <br><strong>spend less time</strong> managing your Flickr groups.'
      },
      interest: [
        {
          title: 'For Profesionals',
          desc: 'Share hundreds of photos to any group without worrying about group restrictions. Ever.',
          icon: 'shopping_delivery-fast'
        },
        {
          title: 'For enthusiats',
          desc:
            "Gain views and likes sharing easily to more groups. Don't waste your time and improve your photography.",
          icon: 'objects_spaceship'
        },
        {
          title: 'For begginers',
          desc:
            "Improve your photography through other photographers eyes. Share and discover. And don't forget to have fun!",
          icon: 'design_image'
        }
      ],
      desire: {
        title: 'We have improved your share workflow',
        desc:
          "We think Flickr is a great tool and groups is a great way to enjoy other people photos. But let's face it, the experience is terrible.<br> We have improved that part.",
        items: [
          {
            title: 'Autoschedule built-in',
            desc:
              "We autoschedule every time a photo is pushed to a group and fails due to group restrictions. We won't miss it.",
            icon: 'emoticons_satisfied',
            color: 'icon-success'
          },
          {
            title: 'Tag your groups',
            desc:
              'When you upload a tagged photo, it will be added to your groups automatically. One shot configuration.',
            icon: 'loader_refresh',
            color: 'icon-danger'
          },
          {
            title: 'Scheduled photos',
            desc: "Schedule view brings your schedule to life and makes it easy to see what's ahead in time.",
            icon: 'education_paper',
            color: 'icon-info'
          },
          {
            title: 'Engage with more users',
            desc:
              'Sharing photos to more groups will make your photos more visible at Flickr. Gaining views and likes.',
            icon: 'objects_spaceship',
            color: 'icon-warning'
          }
        ]
      },
      cta: {
        title: 'Want to feel the new experience?',
        text: 'Sign up',
        link: 'https://app.skedr.io/signup'
      }
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

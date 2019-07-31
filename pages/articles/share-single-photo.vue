<template>
  <div class="wrapper">
    <q-header-small class-name="ben-white">
      <h1 class="title" v-html="article.title" />
      <h3 v-html="article.subtitle" />
    </q-header-small>
    <div class="section">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3 class="title" v-html="article.title" />
              <p v-html="article.introduction" />
            </div>
          </div>
        </div>
      </div>
      <div class="section-blog">
        <div class="container">
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h3>Where do you start?</h3>
                <p>
                  To share a single photo you can select it on your
                  <a href="https://app.skedr.io/photostream/" target="_blank">Photostream</a>*  and select the photo with the arrow
                  button.
                </p>
                <p><i>*You need to be logged into Skedr account</i></p>
                <br>
                <div v-b-modal.sked-button class="image-container sked-button" />
                <b-modal id="sked-button" size="lg" hide-header hide-footer>
                  <img class="image-fluid" src="~assets/img/sked-button.png">
                </b-modal>
                <br>
                <br>
                <p>
                  Let's dig into the Share functionality by hitting the Sked button of any of your photos. A popup menu
                  will open offering all your groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-blog">
        <div class="container">
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h3>Dialog menu</h3>
                <p>Selecting the groups it's pretty simple but let's see what other information we have:</p>
                <ul>
                  <li><strong>Title:</strong> Name of the photo you want to share.</li>
                  <li><strong>Search bar:</strong> To search photos among your groups.</li>
                  <li>
                    <strong>Group list:</strong> Each group from the list has it's name, picture ( with a link to that
                    groups page ), number of members, number of pictures and posting limits for that group.
                  </li>
                  <li><strong>Bottom toolbar:</strong> Suggested groups and the send button.</li>
                </ul>
                <div v-b-modal.sked-dialog class="image-container sked-dialog" />
                <b-modal id="sked-dialog" size="lg" hide-header hide-footer>
                  <img class="image-fluid" src="~assets/img/sked-dialog.png">
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-blog">
        <div class="container">
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h3>Choosing  groups you will share your photo</h3>
                <p>
                  Choose which groups do you want to share the photo with and click the Share button at the bottom
                  toolbar of the dialog menu.
                </p>
                <p>
                  If you still have doubts about any of the steps, please do not hesitate to write us at info@skedr.io and we will be more than happy to offer you help.
                </p>
                <div v-b-modal.sked-sharing-photos class="image-container sked-sharing-photos" />
                <b-modal id="sked-sharing-photos" size="lg" hide-header hide-footer>
                  <img class="image-fluid" src="~assets/img/sked-sharing-photos.png">
                </b-modal>
                <br>
                <br>
                <p>
                  If you still have doubts about this, write to <a href="mailto:info@skedr.io">info@skedr.io</a> for
                  more help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-blog-info">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <hr>
              <div class="card card-profile card-plain">
                <div class="row">
                  <div class="col-md-2">
                    <div class="card-avatar">
                      <a href="#pablo">
                        <img class="img img-raised" src="~assets/img/enric-bisbe-gil.jpg">
                      </a>
                      <div class="ripple-container" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h4 class="card-title">
                      Enric Bisbe Gil
                    </h4>
                    <p class="description">
                      <a href="https://github.com/ebisbe">Developer</a> and
                      <a href="https://www.flickr.com/photos/enric-bisbe">Photography enthusiast</a>. Creator of
                      Skedr.io with the porpuse of helping others.
                    </p>
                  </div>
                  <!-- <div class="col-md-2">
                    <button
                      type="button"
                      class="btn btn-default pull-right btn-round">Follow</button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="section">
        <div class="container">
          <div class="col-md-12">
            <h2 class="title text-center">Similar Stories</h2>
            <br>
            <div
              id="blogs-1"
              class="blogs-1">
              <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                  <div class="card card-plain card-blog">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="card-image">
                          <img
                            class="img img-raised rounded"
                            src="~assets/img/View_photostream_desktop_small.png">
                        </div>
                      </div>
                      <div class="col-md-7">
                        <h6 class="category text-info">Enterprise</h6>
                        <h3 class="card-title">
                          <a href="#pablo">Warner Music Group buys concert discovery service Songkick</a>
                        </h3>
                        <p class="card-description">
                          Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark.
                        </p>
                        <p class="author">
                          by
                          <a href="#pablo">
                            <b>Sarah Perez</b>
                          </a>, 2 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card card-plain card-blog">
                    <div class="row">
                      <div class="col-md-7">
                        <h6 class="category text-danger">
                          <i class="now-ui-icons now-ui-icons media-2_sound-wave"/> Startup
                        </h6>
                        <h3 class="card-title">
                          <a href="#pablo">Insticator raises $5.2M to help publishers</a>
                        </h3>
                        <p class="card-description">
                          Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers to add quizzes, polls and other interactive elements...
                        </p>
                        <p class="author">
                          by
                          <a href="#pablo">
                            <b>Anthony Ha</b>
                          </a>, 5 days ago
                        </p>
                      </div>
                      <div class="col-md-5">
                        <div class="card-image">
                          <img
                            class="img img-raised rounded
                                            "
                            src="~assetsimg/View_photostream_desktop_small.png">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import QHeaderSmall from '@/components/QHeaderSmall'
export default {
  components: { QHeaderSmall },
  validate({ params }) {
    return true
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sharing images into your prefered groups from Flickr is really easy.'
        }
      ]
    }
  },
  computed: {
    article() {
      return this.$t('articles').filter(article => article.slug === 'share-single-photo')[0]
    }
  }
}
</script>

<style>
.ben-white {
  background-image: url(~assets/img/ben-white-226176-unsplash.jpg);
}
.sked-button {
  background-image: url(~assets/img/sked-button.png);
}
.sked-dialog {
  background-image: url(~assets/img/sked-dialog.png);
}
.sked-sharing-photos {
  background-image: url(~assets/img/sked-sharing-photos.png);
}
.sked-button:hover,
.sked-dialog:hover,
.sked-sharing-photos:hover {
  cursor: pointer;
}
</style>

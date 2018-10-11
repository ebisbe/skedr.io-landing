
<template>
  <div class="wrapper">
    <q-header-small class-name="ben-white">
      <h1
        class="title"
        v-html="article.title"/>
      <h3 v-html="article.subtitle"/>
    </q-header-small>
    <div class="section">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3
                class="title"
                v-html="article.title"/>
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
                <p>In order to use this feature you have to add tags to your photos when uploading them. That’s a requirement because we will use your tags to bind them to your groups. Flickr automatically adds tags to your photos based on their AI algorithm but, for the moment ( Oct 2018 ), those tags are hidden from the API so we cannot see them through the API. This is something we need to be careful because you may see that some of your photos have tags but their are not all valid. Let’s take for example one of my photos ( <a
                  href="https://www.flickr.com/photos/enric-bisbe/29869174207"
                  target="_blank">https://www.flickr.com/photos/enric-bisbe/29869174207</a> ) </p>
                <p><i><small>*You need to be logged into Skedr account</small></i></p>
                <br>
                <div
                  v-b-modal.sked-button
                  class="image-container image-tags"/>
                <b-modal
                  id="sked-button"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid image-tags"
                    src="~/assets/img/articles/group-tagging/1-image-tags.png">
                </b-modal>
                <br>
                <br>
                <p><strong>The ones you add will show up in dark gray</strong>. Flickr’s friendly robots will try to help out by adding some for you; these will appear with just a gray outline.</p>
                <p>Tags should represent something related to the photo you are uploading and that can be related to a group you are participating and willing to share an image.</p>
                <p>If we follow the tags from the image you will see that we have: bird, wildlife, ngc and perching. I like to share all my birds photos to Birding groups but I also share them to Natural lovers groups or National geographic ones. So we have the following schema:</p>

                <ul>
                  <li><strong>Bird</strong>: Birding groups ( 7 groups * ).</li>
                  <li><strong>Wildlife</strong>: Natural lovers all kind of animals not just birds ( 4 groups * ).</li>
                  <li><strong>ngc</strong>: National geographic groups. ( 3 groups * )</li>
                  <li><strong>perching</strong>: Perching birds groups. This group is for birds only and that have to be perching on a branch or cable. ( 1 group * )</li>
                </ul>
                <p>With four tags we could be easily sharing this photo to at least 15 different groups (*) just in one step. <i><small>* Those numbers are just for a sample.</small></i></p>
                <p><strong>Remember!</strong> You can add tags while uploading the photo to Flickr or later on. We will have all the information updated no matter when they were tagged.</p>

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
                <h3>How to configure each group</h3>
                <p>To configure each group you have to go <a href="https://app.skedr.io/groups">app.skedr.io/groups</a> then choose a group clicking the forward button ( -> ) or filtering with the filter at the toolbar.</p>
                <div
                  v-b-modal.filter-groups
                  class="image-container filter-groups"/>
                <b-modal
                  id="filter-groups"
                  size="lg"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid"
                    src="~/assets/img/articles/group-tagging/2-filter-groups.png">
                </b-modal>
                <br>
                <br>
                <p>There you will be able to see all the photos you have added to that group.</p>
                <div
                  v-b-modal.groups-view
                  class="image-container groups-view"/>
                <b-modal
                  id="groups-view"
                  size="lg"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid"
                    src="~/assets/img/articles/group-tagging/3-groups-view.png">
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
                <h3>Choosing which tags</h3>
                <p>Click the [ ADD ] button to open a popup with all the tags you have in the photos from the current pool.</p>
                <div
                  v-b-modal.choosing-tags
                  class="image-container choosing-tags"/>
                <b-modal
                  id="choosing-tags"
                  size="lg"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid"
                    src="~/assets/img/articles/group-tagging/4-choosing-tags.png">
                </b-modal>
                <br>
                <br>
                <p>Select one or more tags and click the save button. We recommend binding just one tag per group. That way it's easier to remeber which tag you used.</p>
                <br>
                <br>
                <div
                  v-b-modal.result
                  class="image-container result"/>
                <b-modal
                  id="result"
                  size="lg"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid"
                    src="~/assets/img/articles/group-tagging/5-result.png">
                </b-modal>
                <br>
                <br>
                <p>If you still have doubts about this, write to <a href="mailto:info@skedr.io">info@skedr.io</a> for  more help. We are improving this feature to be more easily to see the configuration.</p>
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
                        <img
                          class="img img-raised"
                          src="~/assets/img/enric-bisbe-gil.jpg">
                      </a>
                      <div class="ripple-container"/>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h4 class="card-title">Enric Bisbe Gil</h4>
                    <p class="description"><a href="https://github.com/ebisbe">Developer</a> and <a href="https://www.flickr.com/photos/enric-bisbe">Photography enthusiast</a>. Creator of Skedr.io with the porpuse of helping others. </p>
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
                            src="~/assets/img/View_photostream_desktop_small.png">
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
                            src="~/assets/img/View_photostream_desktop_small.png">
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
    console.log(params.slug)
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
      return this.$t('articles').filter(article => article.slug === 'group-tagging')[0]
    }
  }
}
</script>

<style>
.ben-white {
  background-image: url(~/assets/img/ben-white-226176-unsplash.jpg);
}
.image-tags {
  background-image: url(~/assets/img/articles/group-tagging/1-image-tags.png);
}
.filter-groups {
  background-image: url(~/assets/img/articles/group-tagging/2-filter-groups.png);
}
.groups-view {
  background-image: url(~/assets/img/articles/group-tagging/3-groups-view.png);
}
.choosing-tags {
  background-image: url(~/assets/img/articles/group-tagging/4-choosing-tags.png);
}
.result {
  background-image: url(~/assets/img/articles/group-tagging/5-result.png);
}
.image-container:hover {
  cursor: pointer;
}
</style>

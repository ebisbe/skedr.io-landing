
<template>
  <div class="wrapper">
    <q-header-small class-name="raw-pixel">
      <h1 class="title">{{ $t('singleShare.title') }} </h1>
      <h3 v-html="$t('singleShare.subtitle')"/>
    </q-header-small>
    <div class="section">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <h3
                class="title"
                v-html="$t('singleShare.title')"/>
              <p>When you need to share an existing photo from your Flickr photostream into many groups, traditionally, you need to select one by one and pray that you don't reach the posting limit for any group.
                <br>
                <br>
                Sharing images into your prefered groups from Flickr is really easy. The benefit of doing it with Skedr is that you will automatically benefit from the <strong><a href="/faq#1-what-is-automated-scheduling">automated scheduler</a></strong> feature. Let's get stared!
              </p>
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
                <p>To share a single photo you can find them through your <a
                  href="https://app.skedr.io/photostream"
                  target="_blank">Photostream</a>* or viewing all images from one of your <a
                    href="https://app.skedr.io/groups"
                    target="_blank">Groups</a>* ( and clicking the arrow button). In both cases you will see that each image has a Sked button.</p>
                <p><i>*You need to be logged into Skedr account</i></p>
                <br>
                <div
                  v-b-modal.sked-button
                  class="image-container sked-button"/>
                <b-modal
                  id="sked-button"
                  size="lg"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid"
                    src="~/assets/img/sked-button.png">
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
              <div class="col-md-8 ml-auto mr-auto"><p>Let's dig into the Share functionality by pressing the Sked button of any of your photos. A popup menu will open with all your groups.</p></div>
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
                <p>Selecting the groups it's pretty simple but let's see see what we currently have:</p>
                <ul>
                  <li><strong>Title:</strong> name of the photo you are willing to share.</li>
                  <li><strong>Search bar:</strong> to filter through your groups and find the correct one.</li>
                  <li><strong>Group list:</strong> Each group from the list has it's name, photo ( with a link to that groups page ), members count, pool count and posting limits for that group.</li>
                  <li><strong>Bottom toolbar:</strong> A list of selected groups and the send button.</li>
                </ul>
                <div
                  v-b-modal.sked-dialog
                  class="image-container sked-dialog"/>
                <b-modal
                  id="sked-dialog"
                  size="lg"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid"
                    src="~/assets/img/sked-dialog.png">
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
                <h3>Choosing which groups you will share your photo</h3>
                <p>Choose into which groups do you want to share the photo and click the Share button at the bottom toolbar of the dialog menu.</p>
                <div
                  v-b-modal.sked-sharing-photos
                  class="image-container sked-sharing-photos"/>
                <b-modal
                  id="sked-sharing-photos"
                  size="lg"
                  hide-header
                  hide-footer>
                  <img
                    class="image-fluid"
                    src="~/assets/img/sked-sharing-photos.png">
                </b-modal>
                <br>
                <br>
                <p>If you still have doubts about this, write to <a href="mailto:info@skedr.io">info@skedr.io</a> for  more help.</p>
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
  head() {
    return {
      title: this.$t('singleShare.title'),
      meta: [{ hid: 'description', name: 'description', content: this.$t('home.attention.desc') }]
    }
  }
}
</script>

<style>
.raw-pixel {
  background-image: url(~/assets/img/ben-white-226176-unsplash.jpg);
}
.sked-button {
  background-image: url(~/assets/img/sked-button.png);
}
.sked-dialog {
  background-image: url(~/assets/img/sked-dialog.png);
}
.sked-sharing-photos {
  background-image: url(~/assets/img/sked-sharing-photos.png);
}
.sked-button:hover,
.sked-dialog:hover,
.sked-sharing-photos:hover {
  cursor: pointer;
}
</style>

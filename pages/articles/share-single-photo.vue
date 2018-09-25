
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
              <p>When you need to share an existing photo from your Flicks photostream into many groups, traditionally you need to ----------------   one by one. Skedr saves significant time, by enabling this in few minutes in one go.
                <br>
                <br>
                You just need to decide the photo you want to share and which groups you want to share the photo to.  You need to be already a member all those groups where you want to share the photo.
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
                  target="_blank">Photostream</a> or viewing all images from one of your <a
                    href="https://app.skedr.io/groups"
                    target="_blank">Groups</a> ( and clicking the Forward button). In both cases you will see that each image has a Sked button.</p>
                <div class="image-container sked-button"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-blog">
        <div class="container">
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto"><p>Let's dig into the Share functionality by pressing the Sked button of any of your photos. A popup menu will open with all your groups. It's pretty simple to use but let's see what we currently have.</p></div>
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
                <p>First there is the title with the name of the photo you are willing to share, then there's a search bar to filter through your groups, the group list and when you have selected one or more groups it appears a bottom bar with a button to share the selected image to that many groups. Each group from the list has it's name, photo ( with a link to that groups page ), members count, pool count and posting limits for that group. From there we select a few groups and we click the confirm button.</p>
                <div class="image-container sked-dialog"/>
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
                <h3>Choosing groups and Share</h3>
                <p>Choose into which groups do you want to share the image and click the Share button at the bottom toolbar of the dialog menu.</p>
                <div class="image-container sked-upload"/>
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
                    <p class="description">I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube.</p>
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
  background-image: url(~/assets/img/averie-woodard-111831-unsplash.jpg);
}
.sked-button {
  background-image: url(~/assets/img/sked-button.png);
}
.sked-dialog {
  background-image: url(~/assets/img/sked-dialog.png);
}
.sked-upload {
  background-image: url(~/assets/img/sked-sharing-photos.png);
}
</style>

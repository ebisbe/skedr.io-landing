
<template>
  <div class="wrapper">
    <q-header-small class-name="article-main">
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
                <p>To configure each group you have to go <a href="https://app.skedr.io/autoimport-tags">app.skedr.io/autoimport-tags</a> then filter with the search option at the toolbar. Searching groups will first search through the groups you have already joined, there is a checkbox with the label 'Search joined groups only' active by default. If you deactivate the checkbox you will be able to search new groups and join them. </p>
                <p>Once you know which group do you want to add there's a 'settings' icon where you can manage the tags. Clicking the button will open a dialog. There you can type as many tags as you want. Hitting enter will show you which photos will be added for each particular tag. Once you have added all tags hit save. Automatically we will add all your photos to each required group.</p>
                <p>By clicking the below image a pop up will show you a better view of the process.</p>
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
                    src="~/assets/img/articles/group-tagging/large.gif">
                </b-modal>
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
.article-main {
  background-image: url(~/assets/img/articles/group-tagging/main.jpg);
}
.image-tags {
  background-image: url(~/assets/img/articles/group-tagging/1-image-tags.png);
}
.filter-groups {
  background-image: url(~/assets/img/articles/group-tagging/large.gif);
}
.image-container:hover {
  cursor: pointer;
}
</style>

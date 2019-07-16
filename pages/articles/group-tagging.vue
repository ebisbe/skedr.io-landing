<template>
  <div class="wrapper">
    <q-header-small class-name="article-main">
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
                  In order to use this feature you have to add tags to your photos when uploading them. That is a
                  requirement because we will use your tags to bind them to your groups. Flickr automatically adds tags
                  to your photos based on their AI algorithm but, for time being ( Oct 2018 ), those tags are hidden
                  from the API so we cannot see them through the API.  This is something we need to pay attention on,
                  as you may see that some of your photos have tags but not all of them are recognized as valid.
                  Let’s use as an example one of my photos in Flickr (
                  <a href="https://www.flickr.com/photos/enric-bisbe/29869174207" target="_blank">https://www.flickr.com/photos/enric-bisbe/29869174207</a>
                  )
                </p>
                <p>
                  <i><small>*You need to be logged into Skedr account</small></i>
                </p>
                <br>
                <div v-b-modal.sked-button class="image-container image-tags" />
                <b-modal id="sked-button" hide-header hide-footer>
                  <img class="image-fluid image-tags" src="~assets/img/articles/group-tagging/1-image-tags.png">
                </b-modal>
                <br>
                <br>
                <p>
                  <strong>The tags you add will show up in dark gray</strong>. Flickr’s friendly robots will try to help
                  out by adding some for you; these will appear with just a gray outline.
                </p>
                <p>
                  Tags should represent and describe something related to the photo you are uploading and that can be related to a
                  group you are participating and willing to share an image with.
                </p>
                <p>
                  In the example above, some of the tags of the image are: bird, wildlife, ngc and perching. I
                  like to share all my bird photos to Birding groups but I also share them to Natural lovers groups or
                  National geographic ones. So we have the following schema:
                </p>

                <ul>
                  <li><strong>Bird</strong>: Birding groups ( 7 groups * ).</li>
                  <li><strong>Wildlife</strong>: Natural lovers of all kind of animals not just birds ( 4 groups * ).</li>
                  <li><strong>ngc</strong>: National geographic groups. ( 3 groups * )</li>
                  <li>
                    <strong>perching</strong>: Perching birds groups. This group is only for birds which are perching
                    on a branch or cable. ( 1 group * )
                  </li>
                </ul>
                <p>
                  With four tags we could be easily sharing this photo into at least 15 different groups (*) just in one
                  step. <i><small>* The figures are just an example.</small></i>
                </p>
                <p>
                  Keep in mind that you can add the tags while uploading the photo to Flickr or later on.
                  All the photo information will be updated no matter the moment when it is tagged.
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
                <h3>How to configure each group</h3>
                <p>
                  To configure each group you have to go to
                  <a href="https://app.skedr.io/autoimport-tags">app.skedr.io/autoimport-tags</a> and then filter with the
                  search option at the toolbar. It will first search between the groups you have already
                  joined. There is a checkbox with the label 'Search joined groups only' active by default. If you
                  deactivate this checkbox you will be able to search new groups and join them.
                </p>
                <p>
                  Once you know which group do you want to join, there is a 'settings' icon where you can adminstrate and manage the tags.
                  By clicking the setting button a dialog will be opened. There you can type as many tags as you want. Hitting enter
                  will show you which photos will be added for each particular tag. Once you have added all tags hit
                  save. We will automatically add all your photos to the corresponding group.
                </p>
                <p>Click on the video below to see a bigger and more complete view of the process.</p>
                <div v-b-modal.filter-groups class="image-container filter-groups" />
                <b-modal id="filter-groups" size="lg" hide-header hide-footer>
                  <img class="image-fluid" src="~/assets/img/articles/group-tagging/large.gif">
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
                        <img class="img img-raised" src="~/assets/img/enric-bisbe-gil.jpg">
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
      return this.$t('articles').filter(article => article.slug === 'group-tagging')[0]
    }
  }
}
</script>

<style>
.article-main {
  background-image: url(~assets/img/articles/group-tagging/main.jpg);
}
.image-tags {
  background-image: url(~assets/img/articles/group-tagging/1-image-tags.png);
}
.filter-groups {
  background-image: url(~assets/img/articles/group-tagging/large.gif);
}
.image-container:hover {
  cursor: pointer;
}
</style>

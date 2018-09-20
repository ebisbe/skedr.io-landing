<template>
  <div class="wrapper">
    <q-header-small class-name="evan-dennis">
      <h1 v-html="$t('faq.title')"/>
    </q-header-small>
    <div class="section">
      <div
        v-for="group in $t('faq.groups')"
        :key="group.title"
        class="row">
        <div class="col-md-10 ml-auto mr-auto">
          <h2
            class="title"
            v-html="group.title"/>
          <br>
          <div class="row justify-content-center">
            <q-collapse
              v-for="(faq,index) in group.items"
              :key="faq.question"
              :title="`${index+1} - ${faq.question}`"
              :desc="faq.answer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QCollapse from '~/components/QCollapse'
import QHeaderSmall from '~/components/QHeaderSmall'
export default {
  components: { QCollapse, QHeaderSmall },
  head() {
    return {
      title: this.$t('faq.title'),
      meta: [{ hid: 'description', name: 'description', content: this.$t('faq.meta_desc') }]
    }
  }
}
</script>
<style>
.evan-dennis {
  background-image: url(~/assets/img/evan-dennis-75563-unsplash.jpg);
}
</style>

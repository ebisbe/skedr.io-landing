<template>
  <div class="wrapper">
    <q-header-small bg-image="images/eva-blue-42498-unsplash.jpg">
      <h1 class="title">Lethal Clan</h1>
    </q-header-small>
    <div class="section section-">
      <div class="container">
        <div class="text-center">
          <h3
            class="title"
            v-html="title"/>
        </div>
        <div
          v-for="(row, ri) in questions"
          :key="ri"
          class="row">
          <div
            v-for="(question, i) in row.items"
            :key="i"
            :class="{'ml-auto': i === 0, 'mr-auto' : i === 1}"
            class="col-md-4">
            <div class="info info-horizontal">
              <div
                :class="question.color"
                class="icon">
                <i
                  :class="question.icon"
                  class="now-ui-icons"/>
              </div>
              <div class="description">
                <h4
                  class="info-title"
                  v-html="question.question"/>
                <p v-html="question.answer"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="subscribe-line subscribe-line-image"
      style="background-image: url('assets/img/bg7.jpg');">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="text-center">
              <h4 class="title">Subscribe to our Newsletter</h4>
              <p class="description">
                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
              </p>
            </div>
            <div class="card card-raised card-form-horizontal">
              <div class="card-body">
                <form
                  method=""
                  action="">
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="now-ui-icons ui-1_email-85"/></span>
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your Email...">
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <button
                        type="button"
                        class="btn btn-primary btn-round btn-block">Subscribe</button>
                    </div>
                  </div>
                </form>
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

export default {
  components: { QHeaderSmall },
  data() {
    return {
      title: 'Preguntas más importantes',
      questions: [
        {
          items: [
            {
              color: 'icon-warning',
              icon: 'ui-1_calendar-60',
              question: 'Cuando es la competicion?',
              answer: '21 y 22 de Julio. Des de las 8h del sabado hasta el domingo por la tarde.'
            },
            {
              color: 'icon-success',
              icon: 'location_pin',
              question: 'Donde es la competición?',
              answer: 'En Sant Fost de Campcentelles, entre Mollet del Valles y la Serralada de Marina.'
            }
          ]
        },
        {
          items: [
            {
              color: 'icon-danger',
              icon: 'business_money-coins',
              question: 'Cuanto cuesta la competición?',
              answer: 'Cada Clan debe pagar 250€ para competir. Un clan consta de 5 integrantes.'
            },
            {
              color: 'icon-info',
              icon: 'travel_info',
              question: 'Tengo más dudas',
              answer: 'Puedes leer todas las preguntas más frecuentes.'
            }
          ]
        }
      ]
    }
  }
}
</script>

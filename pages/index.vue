<template>
  <div class="wrapper">
    <q-header-small class-name="eva-blue">
      <h1 class="title">Lethal Clan</h1>
    </q-header-small>
    <div >
      <q-block
        :rows="what.items"
        :title="what.title"
        :desc="what.desc"
        class="section">
        <div
          slot-scope="{row}"
          class="col-md-4">
          <div class="info info-hover">
            <div
              :class="row.color"
              class="icon icon-circle">
              <i
                :class="row.icon"
                class="now-ui-icons"/>
            </div>
            <h4
              class="info-title"
              v-html="row.title"/>
            <p
              class="description"
              v-html="row.desc"/>
          </div>
        </div>
      </q-block>
      <q-block
        use-container
        title="!SERÉIS TAN FUERTES <br>COMO VUESTRO ESLABÓN MÁS DÉBIL!"
        class="subscribe-line subscribe-line-image victor-freitas1"/>
      <div class="section">
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
                  <p v-if="question.route !== undefined">
                    <nuxt-link
                      :to="question.route">
                      Más información
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="subscribe-line subscribe-line-image victor-freitas2">
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
import QBlock from '~/components/QBlock'

export default {
  components: { QHeaderSmall, QBlock },
  data() {
    return {
      what: {
        title: 'Lethal Clan es una competicion por equipos',
        desc:
          'El eslabón más débil puede llevar tu equipo a la catástrofe pero el eslabón más fuerte no te garantiza la supervivencia del CLAN, sólo el trabajo en equipo puede llevar a tu CLAN a alzarse con el triunfo.',
        items: [
          {
            title: 'Equipos mixtos',
            desc: 'Los equipos estaran formados bajo la regla 3-2, 3 chicos y 2 chicas o 3 chicas y 2 chicos',
            icon: 'sport_user-run',
            color: 'icon-success'
          },
          {
            title: 'Forma el equipo mas Lethal',
            desc: 'Las pruebas están relacionadas con el Crosstraining, las OCR, el trailrunning, Bootcamp.',
            icon: 'objects_diamond',
            color: 'icon-danger'
          },
          {
            title: 'Experiancia única',
            desc: 'Disfruta de un fin de semana de competicion y buen rollo.',
            icon: 'emoticons_satisfied',
            color: 'icon-info'
          }
        ]
      },
      title: 'Preguntas más importantes',
      questions: [
        {
          items: [
            {
              color: 'icon-warning',
              icon: 'ui-1_calendar-60',
              question: 'Cuando es la competicion?',
              answer:
                '<strong>Aún por definir</strong>. La competición será desde las 8h del sabado hasta el mediodia del domingo. Guardate la tarde para el cierre de fiesta.',
              route: { name: 'agenda' }
            },
            {
              color: 'icon-success',
              icon: 'location_pin',
              question: 'Donde es la competición?',
              answer: 'En Sant Fost de Campcentelles, entre Mollet del Valles y la Serralada de Marina.',
              route: { name: 'agenda' }
            }
          ]
        },
        {
          items: [
            {
              color: 'icon-danger',
              icon: 'business_money-coins',
              question: 'Cuanto cuesta la competición?',
              answer: 'Cada Clan debe pagar 250€ para competir. Un clan consta de 5 integrantes.',
              route: { name: 'tarifas' }
            },
            {
              color: 'icon-info',
              icon: 'travel_info',
              question: 'Tengo más dudas',
              route: { name: 'faq' },
              answer:
                'Puedes leer todas las preguntas más frecuentes. Pero si tienes más dudas contacta directamente con nosotros.'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.eva-blue {
  background-image: url(~/assets/img/eva-blue-42498-unsplash.jpg);
}
.victor-freitas1 {
  background-image: url('~/assets/img/victor-freitas-572867-unsplash.jpg');
}

.victor-freitas2 {
  background-image: url('~/assets/img/victor-freitas-604832-unsplash.jpg');
}
</style>

<template>
  <div class="wrapper">
    <q-header-small bg-image="images/sam-truong-dan-627874-unsplash.jpg">
      <h1>Tarifas</h1>
      <h4>No es sólo una competición, disfruta de un fin de semana completo</h4>
    </q-header-small>
    <div class="projects-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">We have many advantages</h2>
            <h4 class="description">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h4>
            <div class="section-space"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 ml-auto">
            <div class="card card-pricing">
              <div class="card-body">
                <h6 class="category">Competición</h6>
                <div class="icon icon-primary">
                  <i class="now-ui-icons sport_user-run"/>
                </div>
                <h3 class="card-title">250€</h3>
                <p class="card-description">Precio por CLAN. Cada clan esta compuesto por 5 integrantes.</p>
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round">Add to Cart</a>
              </div>
            </div>
          </div>
          <div class="col-md-5 mr-auto">
            <div class="info info-horizontal">
              <div class="icon icon-danger">
                <i class="now-ui-icons sport_trophy"/>
              </div>
              <div class="description">
                <h4 class="info-title">Crea tu CLAN</h4>
                <p class="description">Los CLANES esta compuetos por la regla 3-2, es decir, 3 chicos y 2 chicas o 3 chicas y 2 chicos.</p>
              </div>
            </div>
            <div class="info info-horizontal">
              <div class="icon icon-danger">
                <i class="now-ui-icons business_chart-pie-36"/>
              </div>
              <div class="description">
                <h4 class="info-title">Performance Analyze</h4>
                <p class="description">
                  Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-5 ml-auto mt-5">
            <div class="info info-horizontal">
              <div class="icon icon-warning">
                <i class="now-ui-icons users_single-02"/>
              </div>
              <div class="description">
                <h4 class="info-title">¿Quieres disfrutar de un fin de semana completo?</h4>
                <p class="description">Podrás alojarte en nuestro campamento… Pero no esperes un hotel de 5 estrellas</p>
              </div>
            </div>
            <div class="info info-horizontal">
              <div class="icon icon-warning">
                <i class="now-ui-icons business_chart-bar-32"/>
              </div>
              <div class="description">
                <h4 class="info-title">Descansa durante la noche</h4>
                <p class="description">O no... nosotros te garantizamos buen rollo donde todos los CLANES podréis vivir en comunidad.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 mr-auto">
            <div class="card card-pricing">
              <div class="card-body">
                <h6 class="category">Alojamiento</h6>
                <div class="icon icon-primary">
                  <i class="now-ui-icons shopping_shop"/>
                </div>
                <h3 class="card-title">10€<small>/persona</small></h3>
                <p class="card-description">Plazas del alojamiento son limitadas, reserva con antelación para garantizar tu plaza.</p>
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round">Add to Cart</a>
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
  name: 'Tarifas',
  components: { QHeaderSmall },
  head() {
    return {
      title: 'Tarifas para competir - Lethal Clan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Disfruta de un fin de semana de competición completo con tu Clan por 250€, tambien tienes alojamiento por 10€/persona.'
        }
      ]
    }
  }
}
</script>

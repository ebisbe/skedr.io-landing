<template>
  <div class="wrapper">
    <div class="page-header page-header-small">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image: url('images/roxanne-joncas-582452-unsplash.jpg')"/>
      <div class="content-center">
        <h1 class="title">Interiorismo Online</h1>
        <div class="text-center">
          <a
            href="#pablo"
            class="btn btn-primary btn-icon  btn-round">
            <i class="fa fa-facebook-square"/>
          </a>
          <a
            href="#pablo"
            class="btn btn-primary btn-icon btn-round">
            <i class="fa fa-google-plus"/>
          </a>
          <a
            href="#pablo"
            class="btn btn-primary btn-icon btn-round">
            <i class="fa fa-google-plus"/>
          </a>
        </div>
      </div>
    </div>
    <block
      :rows="styleImages"
      class="features-8 section-image"
      style="background-image: url('assets/img/bg30.jpg')"
      title="Nuestros estilos" >
      <div
        slot-scope="{row}"
        class="col-md-3">
        <div class="card">
          <div class="card-image">
            <img
              :src="row.path"
              class="rounded"
              alt="">
          </div>
          <div class="card-body text-center">
            <h4
              style="margin: 0"
              v-html="row.name"/>
          </div>
        </div>
      </div>
    </block>
    <block
      :rows="features.list"
      :title="features.title"
      :desc="features.desc"
      class="features-4">
      <div
        slot-scope="{row}"
        class="col-md-4">
        <div
          :style="{backgroundImage: 'url('+row.path+')'}"
          class="card card-background card-raised"
          data-background-color="">
          <div class="info">
            <div class="icon icon-white">
              <i
                :class="row.icon"
                class="now-ui-icons"/>
            </div>
            <div class="description">
              <h4
                class="info-title"
                v-html="row.title"/>
              <p v-html="row.desc"/>
              <a
                href="#pablo"
                class="ml-3">Leer más...</a>
            </div>
          </div>
        </div>
      </div>
    </block>
    <block
      :rows="designers.list"
      :title="designers.title"
      class="team-4">
      <div
        slot-scope="{row}"
        class="col-md-6">
        <div class="card card-profile card-plain">
          <div class="row">
            <div class="col-md-5">
              <div class="card-image">
                <a href="#pablo">
                  <img
                    :src="row.path"
                    class="img img-raised rounded">
                </a>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h4
                  class="card-title"
                  v-html="row.name"/>
                <h6
                  class="category"
                  v-html="row.style"/>
                <p
                  class="card-description"
                  v-html="row.desc"/>
                <div class="card-footer">
                  <a
                    v-for="(brand,index) in row.social"
                    :key="index"
                    :href="brand.link"
                    :class="'btn-'+brand.name"
                    class="btn btn-icon btn-neutral">
                    <i
                      :class="'fa-'+brand.name"
                      class="fa"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </block>

    <block
      id="pricing-3"
      :rows="plans.list"
      :title="plans.title"
      :use-container="true"
      class="pricing-3 section-image"
      style="background-image: url('assets/img/pricing3.jpg')">
      <div
        slot-scope="{row, iteration}"
        :class="iteration === 0 ? 'ml-auto' : 'mr-auto'"
        class="col-md-4">
        <div
          :data-background-color="row.color"
          class="card card-pricing">
          <div class="card-body">
            <h6
              class="category"
              v-html="row.name"/>
            <h1 class="card-title">
              {{ row.price * (100 - row.discount) / 100 }}<small>&euro;</small>
              <small
                class="font-crossed">
                <s v-html="`${row.price} &euro;`"/>
              </small>
            </h1>
            <h5 v-html="row.desc"/>
            <ul>
              <li>1 concepto/ habitación</li>
              <li>Diseño en 5 días</li>
              <li>Revisiones ilimitadas</li>
              <li>Accesorios & decoración solo</li>
              <li>Listado de compra</li>
            </ul>
            <nuxt-link
              :class="row.color !== '' && row.color !== undefined ? 'btn-neutral': 'btn-primary'"
              :to="{name: 'ambiente-id', params: {id: row.slug}}"
              class="btn btn-round">
              Empieza</nuxt-link>
          </div>
        </div>
      </div>
    </block>
    <footer class="footer footer-default ">
      <div class="container">
        <nav>
          <ul>
            <li>
              <a href="https://www.creative-tim.com">
                Creative Tim
              </a>
            </li>
            <li>
              <a href="http://presentation.creative-tim.com">
                About Us
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">
                Blog
              </a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/license">
                License
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright">
          &copy;
          {{ year }}, Designed by
          <a
            href="http://www.invisionapp.com"
            target="_blank">Invision</a>. Coded by
          <a
            href="https://www.creative-tim.com"
            target="_blank">Creative Tim</a>.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import block from '~/components/block'

export default {
  components: { block },
  data() {
    return {
      styleImages: [
        {
          name: 'Urbano',
          path: 'images/jason-briscoe-332508-unsplash.jpg'
        },
        {
          name: 'Árabe',
          path: 'images/orlova-maria-379663-unsplash.jpg'
        },
        {
          name: 'Clássico',
          path: 'images/rhema-kallianpur-560711-unsplash.jpg'
        },
        {
          name: 'Mediterráneo',
          path: 'images/sonnie-hiles-489078-unsplash.jpg'
        }
      ],
      features: {
        title: 'Ir a casa, un placer!',
        desc:
          'Decoralyte es una forma conveniente, personal y asequible de redecorar su casa habitación por habitación. Colabora con nuestros diseñadores de interiores profesionales en nuestra plataforma en línea.',
        list: [
          {
            icon: 'business_bulb-63',
            title: 'Colabora con ideas',
            desc: 'Su diseñador volverá a usted con un conjunto inicial de ideas.',
            path: 'assets/img/bg24.jpg'
          },
          {
            icon: 'business_badge',
            title: 'Elige tu diseñador',
            desc: 'Los diseñadores de interiores de Decoralyte son profesionales investigados y personas reales.',
            path: 'assets/img/bg23.jpg'
          },
          {
            icon: 'location_map-big',
            title: 'Visualiza tu habitación',
            desc: 'Comparte un plano de planta y crearemos una visualización de tu habitación.',
            path: 'assets/img/bg25.jpg'
          }
        ]
      },
      designers: {
        title: 'Nuestro diseñadores',
        list: [
          {
            name: 'Ignacio Lopez',
            style: 'Minimal ecléptico',
            path: 'assets/img/olivia.jpg',
            desc:
              'Adoro incorporar diferentes objetos artísticos que mi cliente haya podido coleccionar para personalizar al máximo el diseño. ',
            social: [{ name: 'twitter', link: '' }, { name: 'facebook', link: '' }]
          }
        ]
      },
      plans: {
        title: 'Escoje tu ambiente',
        list: [
          {
            name: 'Hogar',
            slug: 'hogar',
            price: 79,
            discount: 70,
            desc: 'Salón / Dormitorio / Terraza'
          },
          {
            name: 'Negocio',
            slug: 'negocio',
            price: 149,
            discount: 70,
            desc: 'Tienda / Restauración',
            color: 'orange'
          }
        ]
      }
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

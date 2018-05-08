<template>
  <div class="wrapper">
    <div class="page-header page-header-mini">
      <div
        class="page-header-image"
        style="background-image: url('/assets/img/pp-cov.jpg');"/>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <b-carousel
              :interval="8000"
              class="carousel slide"
              controls
              indicators>
              <b-carousel-slide
                v-for="slide in slides"
                :key="slide.name"
                :img-alt="slide.name"
                :img-src="slide.path"/>
            </b-carousel>
            <p class="blockquote blockquote-primary">
              "And thank you for turning my personal jean jacket into a couture piece. Wear yours with mirrored sunglasses on vacation."
              <br>
              <br>
              <small>Kanye West</small>
            </p>
          </div>
          <div class="col-md-6 ml-auto mr-auto">
            <h2 class="title"> 1 habitacion</h2>
            <h5 class="category">Slim-Fit Leather Biker Jacket</h5>
            <h2 class="main-price">{{ realPrice }}<small>&euro;</small>&nbsp;
              <small
                class="font-crossed">
                <s v-html="`${price} &euro;`"/>
            </small></h2>
            <div
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
              class="card-collapse">
              <d-collapse
                v-for="(detail, i) in details"
                :key="i"
                :visible="i === 0"
                :title="detail.title"
                :desc="detail.desc"/>
            </div>

            <div class="row pick-size">
              <div class="col-lg-6 col-md-8 col-sm-6">
                <label>Habitaciones</label>
                <b-form-input
                  id="quantity"
                  v-model="quantity"
                  :state="validQuantity"
                  type="number"
                  @change="validateQuantity"/>
              </div>
              <div class="col-lg-6 col-md-8 col-sm-6">
                <label>Pagarás:</label>
                <h5>
                  {{ realPrice }}&euro; x {{ quantity }}/hab. = {{ realPrice * quantity }}&euro;
                </h5>
              </div>
            </div>
            <div class="row justify-content-end">
              <button class="btn btn-primary mr-3">Comprar &nbsp;<i class="now-ui-icons shopping_cart-simple"/></button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center mr-5">
              <h2 class="title">How to wear it</h2>
              <h4 class="description">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h4>
            </div>
          </div>
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-4 ml-auto mr-auto">
                <div
                  class="image-container image-left"
                  style="background-image: url('../assets/img/pp-5.jpg')">
                  <!-- First image on the left side -->
                  <p class="blockquote blockquote-primary">"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                    <br>
                    <br>
                    <small> - NOAA</small>
                  </p>
                </div>
                <!-- Second image on the left side of the article -->
                <div
                  class="image-container"
                  style="background-image: url('../assets/img/bg29.jpg')"/>
              </div>
              <div class="col-md-4 ml-auto mr-auto">
                <!-- First image on the right side, above the article -->
                <div
                  class="image-container image-right"
                  style="background-image: url('../assets/img/pp-4.jpg')"/>
                <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                </p>
                <p>For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DCollapse from '~/components/DCollapse.vue'
export default {
  components: { DCollapse },
  data() {
    return {
      price: 79,
      discount: 70,
      quantity: 1,
      slides: [
        { name: 'First slide', path: '/assets/img/pp-1.jpg' },
        { name: 'Second slide', path: '/assets/img/pp-2.jpg' },
        { name: 'Third slide', path: '/assets/img/pp-3.jpg' },
        { name: 'Fourth slide', path: '/assets/img/pp-4.jpg' }
      ],
      details: [
        {
          title: 'Description',
          desc:
            "<p>Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a bikini in a one-piece silhouette. This fuchsia style is crafted from the label's sculpting peau douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation.</p>"
        },
        {
          title: 'Designer Information',
          desc:
            '<p>An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling \'Morning After Bag\' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a "downtown romantic" theme.</p>'
        },
        {
          title: 'Details and Care',
          desc:
            '<ul><li>Storm and midnight-blue stretch cotton-blend</li><li>Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket</li><li>Two button fastening</li><li>84% cotton, 14% nylon, 2% elastane</li><li>Dry clean</li></ul>'
        }
      ]
    }
  },
  computed: {
    validQuantity() {
      return this.quantity > 0
    },
    realPrice() {
      return this.price * (100 - this.discount) / 100
    }
  },
  methods: {
    validateQuantity(newValue) {
      if (newValue < 1) {
        this.quantity = 1
      }
    }
  }
}
</script>

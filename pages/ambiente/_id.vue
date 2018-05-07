<template>
  <div class="wrapper">
    <div class="page-header page-header-mini">
      <div
        class="page-header-image"
        style="background-image: url('../assets/img/pp-cov.jpg'); transform: translate3d(0px, 799px, 0px);"/>
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
                img-alt="First Slide"
                img-src="/assets/img/pp-1.jpg"/>
              <b-carousel-slide
                img-alt="First Slide"
                img-src="/assets/img/pp-2.jpg"/>
              <b-carousel-slide
                img-alt="First Slide"
                img-src="/assets/img/pp-3.jpg"/>
              <b-carousel-slide
                img-alt="First Slide"
                img-src="/assets/img/pp-4.jpg"/>
            </b-carousel>
            <p class="blockquote blockquote-primary">
              "And thank you for turning my personal jean jacket into a couture piece. Wear yours with mirrored sunglasses on vacation."
              <br>
              <br>
              <small>Kanye West</small>
            </p>
          </div>
          <div class="col-md-6 ml-auto mr-auto">
            <h2 class="title"> Saint Laurent </h2>
            <h5 class="category">Slim-Fit Leather Biker Jacket</h5>
            <h2 class="main-price">$3,390</h2>
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
                <label>Select color</label>
                <div class="btn-group bootstrap-select"><button
                  type="button"
                  class="dropdown-toggle select-with-transition btn btn-block"
                  data-toggle="dropdown"
                  role="button"
                  title="Black"><span class="filter-option pull-left">Black</span>&nbsp;<span class="bs-caret"><span class="caret"/></span></button><div
                    class="dropdown-menu open"
                    role="combobox"><ul
                      class="dropdown-menu inner"
                      role="listbox"
                      aria-expanded="false"><li
                        data-original-index="0"
                        class="selected"><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="true"><span class="text">Black</span><span class="now-ui-icons ui-1_check check-mark"/></a></li><li data-original-index="1"><a
                            tabindex="0"
                            class=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"><span class="text">Gray</span><span class="now-ui-icons ui-1_check check-mark"/></a></li><li data-original-index="2"><a
                              tabindex="0"
                              class=""
                              data-tokens="null"
                              role="option"
                              aria-disabled="false"
                              aria-selected="false"><span class="text">White</span><span class="now-ui-icons ui-1_check check-mark"/></a></li></ul></div><select
                                class="selectpicker"
                                data-style="select-with-transition btn btn-block"
                                data-size="7"
                                tabindex="-98">
                                <option value="1">Black</option>
                                <option value="2">Gray</option>
                                <option value="3">White</option>
                </select></div>
              </div>
              <div class="col-lg-6 col-md-8 col-sm-6">
                <label>Select size</label>
                <div class="btn-group bootstrap-select"><button
                  type="button"
                  class="dropdown-toggle select-with-transition btn btn-block"
                  data-toggle="dropdown"
                  role="button"
                  title="Small"><span class="filter-option pull-left">Small </span>&nbsp;<span class="bs-caret"><span class="caret"/></span></button><div
                    class="dropdown-menu open"
                    role="combobox"><ul
                      class="dropdown-menu inner"
                      role="listbox"
                      aria-expanded="false"><li
                        data-original-index="0"
                        class="selected"><a
                          tabindex="0"
                          class=""
                          data-tokens="null"
                          role="option"
                          aria-disabled="false"
                          aria-selected="true"><span class="text">Small </span><span class="now-ui-icons ui-1_check check-mark"/></a></li><li data-original-index="1"><a
                            tabindex="0"
                            class=""
                            data-tokens="null"
                            role="option"
                            aria-disabled="false"
                            aria-selected="false"><span class="text">Medium</span><span class="now-ui-icons ui-1_check check-mark"/></a></li><li data-original-index="2"><a
                              tabindex="0"
                              class=""
                              data-tokens="null"
                              role="option"
                              aria-disabled="false"
                              aria-selected="false"><span class="text">Large</span><span class="now-ui-icons ui-1_check check-mark"/></a></li></ul></div><select
                                class="selectpicker"
                                data-style="select-with-transition btn btn-block"
                                data-size="7"
                                tabindex="-98">
                                <option value="1">Small </option>
                                <option value="2">Medium</option>
                                <option value="3">Large</option>
                </select></div>
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
  }
}
</script>

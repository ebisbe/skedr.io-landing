<template>
  <div :class="{'nav-open': navbar_menu_visible}">
    <!-- Navbar -->
    <nav
      :class="{'navbar-transparent': navbarTransparent}"
      class="navbar navbar-expand-lg bg-white fixed-top">
      <div class="container">
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="/">
            Lethal Clan
          </a>
          <button
            :class="{'navbar-toggler': true, 'toggled': toggledMenu}"
            type="button"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="openNavBar">
            <span class="navbar-toggler-bar bar1"/>
            <span class="navbar-toggler-bar bar2"/>
            <span class="navbar-toggler-bar bar3"/>
          </button>
        </div>
        <div
          class="collapse navbar-collapse has-image"
          data-color="orange">
          <ul class="navbar-nav ml-auto">
            <li
              v-for="menu in menus"
              :key="menu.name"
              class="nav-item">
              <nuxt-link
                :to="menu.path"
                :class="menu.class" >
                <i
                  v-if="menu.icon"
                  :class="menu.icon"
                  class="now-ui-icons"/>
                <p v-html="menu.name"/>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <nuxt/>

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
    <div
      v-if="showCloseNavBar"
      id="bodyClick"
      @click="closeNavBar()"/>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      navbar_menu_visible: false,
      showCloseNavBar: false,
      toggledMenu: false,
      navbarTransparent: true,
      menus: [
        {
          name: 'Agenda',
          path: 'agenda',
          icon: 'education_agenda-bookmark',
          class: 'nav-link'
        },
        {
          name: 'Tarifas',
          path: 'tarifas',
          icon: 'business_money-coins',
          class: 'nav-link'
        },
        {
          name: 'Faq',
          path: 'faq',
          icon: 'travel_info',
          class: 'nav-link'
        },
        {
          name: 'Registro',
          path: 'registro',
          class: 'nav-link btn btn-primary'
        }
      ]
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  created: function() {
    window.addEventListener('scroll', this.isNavbarTransparent)
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.isNavbarTransparent)
  },
  methods: {
    isNavbarTransparent() {
      this.navbarTransparent = window.scrollY <= 500
    },
    openNavBar() {
      this.toggledMenu = true
      this.navbar_menu_visible = true
      this.showCloseNavBar = true
    },
    closeNavBar() {
      this.navbar_menu_visible = false
      setTimeout(() => {
        this.toggledMenu = false
        this.showCloseNavBar = false
      }, 550)
    }
  }
}
</script>

<template>
  <div
    id="page-home"
    :class="{'nav-open': navbar_menu_visible}">
    <!-- Navbar -->
    <nav
      :class="{'navbar-transparent': navbarTransparent}"
      class="navbar navbar-expand-lg bg-white fixed-top">
      <div class="container">
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="/">
            Skedr.io
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
              <a
                v-if="menu.external"
                :href="menu.path"
                :class="menu.class">
                <i
                  v-if="menu.icon"
                  :class="menu.icon"
                  class="now-ui-icons"/>
                <p v-html="menu.name"/>
              </a>
              <nuxt-link
                v-else
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
          <ul/>
        </nav>
        <div class="copyright">
          Get in touch at
          <a href="mailto:info@skedr.io">info@skedr.io</a>
          &nbsp;
          &nbsp;
          &copy;
          2017-{{ year }}, Skedr.io
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
          name: 'Features',
          path: '#features',
          class: 'nav-link '
        },
        {
          name: 'Login',
          external: true,
          path: 'https://app.skedr.io',
          class: 'nav-link btn btn-primary'
        },
        {
          name: 'Sign up',
          external: true,
          path: 'https://app.skedr.io/signup',
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
    if (process.browser) {
      window.addEventListener('scroll', this.isNavbarTransparent)
    }
  },
  destroyed: function() {
    if (process.browser) {
      window.removeEventListener('scroll', this.isNavbarTransparent)
    }
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

<style>
#page-home:before {
  content: '';
  width: 6em;
  height: 6em;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: url(~/assets/img/beta-label-bottom-right.svg) center center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>

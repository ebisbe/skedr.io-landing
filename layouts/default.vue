<template>
  <div :class="{'nav-open': navbar_menu_visible}">
    <!-- Navbar -->
    <nav
      :class="{'navbar-transparent': navbarTransparent}"
      class="navbar navbar-expand-lg bg-white fixed-top">
      <div class="container">
        <div class="dropdown button-dropdown">
          <a
            id="navbarDropdown"
            class="dropdown-toggle">
            <span class="button-bar"/>
            <span class="button-bar"/>
            <span class="button-bar"/>
          </a>
          <div
            class="dropdown-menu"
            aria-labelledby="navbarDropdown">
            <a class="dropdown-header">Dropdown header</a>
            <a
              class="dropdown-item"
              href="#">Action</a>
            <a
              class="dropdown-item"
              href="#">Another action</a>
            <a
              class="dropdown-item"
              href="#">Something else here</a>
            <div class="dropdown-divider"/>
            <a
              class="dropdown-item"
              href="#">Separated link</a>
            <div class="dropdown-divider"/>
            <a
              class="dropdown-item"
              href="#">One more separated link</a>
          </div>
        </div>
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="/">
            Decoralyte
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
            <li class="nav-item">
              <a
                class="nav-link"
                href="../index.html"
                target="_blank">
                <i class="now-ui-icons design_app"/>
                <p>Components</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn btn-primary"
                href="https://www.creative-tim.com/product/now-ui-kit-pro"
                target="_blank">
                <p>Register</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <nuxt/>
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
      navbarTransparent: true
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

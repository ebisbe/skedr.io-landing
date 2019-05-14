<template>
  <div id="page-home" :class="{ 'nav-open': navbar_menu_visible, 'blog-post': true }">
    <!-- Navbar -->
    <nav :class="{ 'navbar-transparent': navbarTransparent }" class="navbar navbar-expand-lg bg-white fixed-top">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="/" v-html="$t('app_name')" />
          <button
            :class="{ 'navbar-toggler': true, toggled: toggledMenu }"
            type="button"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="openNavBar"
          >
            <span class="navbar-toggler-bar bar1" />
            <span class="navbar-toggler-bar bar2" />
            <span class="navbar-toggler-bar bar3" />
          </button>
        </div>
        <div class="collapse navbar-collapse has-image" data-color="orange">
          <ul class="navbar-nav ml-auto">
            <li v-for="menu in menus" :key="menu.name" class="nav-item">
              <a v-if="menu.external" :href="menu.path" :class="menu.class">
                <i v-if="menu.icon" :class="menu.icon" class="now-ui-icons" />
                <p v-html="$t(`menu.${menu.name}`)" />
              </a>
              <nuxt-link v-else :to="menu.path" :class="menu.class">
                <i v-if="menu.icon" :class="menu.icon" class="now-ui-icons" />
                <p v-html="$t(`menu.${menu.name}`)" />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <nuxt />

    <footer class="footer footer-default ">
      <div class="container">
        <nav>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy policy</a>
            </li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
            <!-- <li>
              <nuxt-link
                v-for="locale in $i18n.locales"
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
              >
                {{ locale.name }}
              </nuxt-link>
            </li> -->
          </ul>
        </nav>
        <div class="copyright">
          <span v-html="$t('layout.contact')" />&nbsp;
          <a href="mailto:info@skedr.io">info@skedr.io</a>
          &nbsp; &nbsp; &copy; 2017-{{ year }}, {{ $t('app_name') }}
        </div>
      </div>
    </footer>
    <div v-if="showCloseNavBar" id="bodyClick" @click="closeNavBar()" />
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
          name: 'features',
          path: this.localePath('index') + '#features',
          class: 'nav-link'
        },
        {
          name: 'pricing',
          path: this.localePath('index') + '#pricing',
          class: 'nav-link'
        },
        {
          name: 'faq',
          path: this.localePath('faq'),
          class: 'nav-link'
        },
        {
          name: 'login',
          external: true,
          path: 'https://app.skedr.io',
          class: 'nav-link btn btn-primary'
        },
        {
          name: 'signup',
          external: true,
          path: 'https://app.skedr.io/auth/sign-up',
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
  left: 0;
  transform: rotate(90deg);
  bottom: 0;
  z-index: 9999;
  background: url(~assets/img/beta-label-bottom-right.svg) center center;
  background-size: contain;
  background-repeat: no-repeat;
}

.privacy-policy {
  background-image: url(~assets/img/privacy-policy.jpg);
}
</style>

import Vue from 'vue'
// the component
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//import brands from '@fortawesome/fontawesome-free-brands'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faFacebookSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRating from 'vue-star-rating/dist/VueStarRating.common'

import {VueCookieNext} from 'vue-cookie-next'

const app = createApp(App)

app.use(router)
app.component('star-rating', StarRating);

app.mount('#app')
//TODO: passar as ref`s para model`s
VueCookieNext.config({expire: '7d'})

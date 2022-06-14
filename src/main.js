import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import StarRating from 'vue-star-rating/dist/VueStarRating.common'
const app = createApp(App)

app.use(router)
app.component('star-rating', StarRating);

app.mount('#app')

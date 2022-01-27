import { createApp } from 'vue'
import App from '~/App.vue'
import store from '~/store'
import fetch from '~/plugins/fetch'

const app = createApp(App)
app.use(store)
app.use(fetch)
app.mount('#app')

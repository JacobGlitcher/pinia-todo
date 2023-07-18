import { createApp } from 'vue'
import { createPinia } from 'pinia'

// here should be scss styles import
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).mount('#app')

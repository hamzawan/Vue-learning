import { createApp } from 'vue'
import App from './App.vue'
import BaseLayout from './components/slots/named_slots/BaseLayout.vue'

const app = createApp(App);


app.component('base-layout', BaseLayout)

app.mount("#app");
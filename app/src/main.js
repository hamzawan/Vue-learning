import { createApp } from 'vue'
import App from './App.vue'
import BaseLayout from './components/slots/named_slots/BaseLayout.vue'
import TodoList from './components/slots/scoped_slots/TodoList.vue'

const app = createApp(App);


app.component('base-layout', BaseLayout)
app.component('todo-list', TodoList)

app.mount("#app");
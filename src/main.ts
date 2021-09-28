import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import './utils/permission'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')

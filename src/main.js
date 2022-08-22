import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layouts/index.scss'
import i18n from './locale/i18n'

createApp(App).use(router).use(i18n).mount('#app')



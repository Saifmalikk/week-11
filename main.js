/* eslint-disable */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseApp } from '@/utils/firebase';

const app = createApp(App)

app.use(router)
app.mount('#app')
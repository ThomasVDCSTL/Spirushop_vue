import './assets/main.css'

import { createApp } from 'vue'
import CETTEFOISCESTLAVRAIDEVRAIAPP from "@/CETTEFOISCESTLAVRAIDEVRAIAPP.vue";
import myRouter from "@/index.js";


const app=createApp(CETTEFOISCESTLAVRAIDEVRAIAPP)

    app.use(myRouter)

    app.mount('#app')

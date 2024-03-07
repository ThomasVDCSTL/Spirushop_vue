import './assets/main.css'

import { createApp } from 'vue'
import REELAPPAKHI from './REELAPPAKHI.vue'
import header from './cmavue/header.vue'


createApp( header ).mount('#header')
// import { aboutPage } from "@/cmavue/header.vue";
// if (aboutPage) {
    createApp(REELAPPAKHI).mount('#app')
// }
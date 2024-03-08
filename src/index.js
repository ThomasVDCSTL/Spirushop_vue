import { createRouter, createWebHistory } from 'vue-router';
import displayListVue from "@/cmavue/displayListVue.vue";
import displayMapVue from "@/cmavue/displayMapVue.vue";
import aboutApp from "@/AboutApp.vue";



const myRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
    {
        path : '/',
        name: "Liste Suppliers",
        component : displayListVue
    },
    {
        path : "/map",
        name: "Map Suppliers",
        component : displayMapVue
    },
    {
        path : "/about",
        name: "A propos",
        component : aboutApp
    }
]
})

export default myRouter
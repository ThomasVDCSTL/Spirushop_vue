<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from "vue";
import displayListVue from './cmavue/displayListVue.vue'
import displayMapVue from './cmavue/displayMapVue.vue'

const title = "Spirushop";
const displayList=ref(true);


</script>

<template>
  <img src="https://alovitox.com/wp-content/uploads/2020/06/spirulina.png" alt="Tas De co.. Spiruline !">
  <h1>{{ title }}</h1>
  <div>
    <button
        @click="displayList=true">
    <router-link to="/">LISTE</router-link>
    </button>
    <button
        @click="displayList=false">
    <router-link to="/map">MAP</router-link>
    </button>
  </div>
  <router-view></router-view>
<!--  <displayListVue v-if="displayList" ></displayListVue>-->
<!--  <display-map-vue v-else ></display-map-vue>-->
</template>

<style scoped>
h1 {
  height : 200px;
  display: flex ;
  justify-content: center;
  align-items: center;
  font-family: 'Porter Sans Block', sans-serif;
  font-size:60px;
  color: darkgreen;
  margin-top: 50px;
  background-size: contain;
  transition: font-size .3s ease;
}
h1:hover{
  font-size: 70px;
}
h1~div{
  width: 100%;
  height : 150px;
  display: flex;
}
div button {
  font-family: 'Michroma';
  font-size: 30px;
  color: white;
  height: 100%;
  width: 50%;
  border : none;
  background: none;
  transition: background-color 0.2s ease, font-size .2s ease ;
  display: flex;
}
button~button{
  border-left: white solid 0.5px;
}
button:hover{
  background: rgba(255,255,255,.2);
  font-size: 35px;
}
img {
  position: absolute;
  top:80px;
  z-index: -1000;
}
a{
  width: 100%;
  height:100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
a:hover{
  background: none;
}
</style>
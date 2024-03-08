<script setup>

import {ref} from "vue";


</script>

<template>
<div id="header">
  <ul>
    <li class="btnnvbr">
      <button @click="aboutPage=false">FOURNISSEURS</button>
    </li>
    <li>
      <img src="https://static.wixstatic.com/media/5e2c7c_2f24e75db0f549b1a01b20f296acb165~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5e2c7c_2f24e75db0f549b1a01b20f296acb165~mv2.png" alt="logoSpirulineTahBogotta">
    </li>
    <li class="btnnvbr">
      <button @click="aboutPage=true">A PROPOS</button>
    </li>
  </ul>
</div>
</template>

<style scoped>
img{
  height : 150px;
  transition: height .5s, transform .5s ease-out;
}
img:hover{
  height: 200px;
  transform: rotate(360deg);
}
ul{
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
button:hover{
  background: rgba(255,255,255,.2);
  font-size: 35px;
}
button {
  font-family: 'Michroma';
  font-size: 30px;
  color: white;
  height: 75px;
  width: 100%;
  border : none;
  background: none;
  transition: background-color 0.2s ease, font-size .2s ease ;
  cursor: pointer;
}
li{
  width: 33.3%;
  display: flex;
  justify-content: center;
}
</style>

<script>

import {ref} from "vue";

export const aboutPage = ref(false)
</script>
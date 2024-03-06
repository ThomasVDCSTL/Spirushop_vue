<script setup>
import {ref} from "vue";
const props = defineProps({
  infos : {
    type : Object,
    required : true
  }
})
const suppName = ref(props.infos.name)
const suppAvailable = ref(props.infos.status)
const suppLastRefresh = ref(props.infos.checkedAt)


</script>

<template>
  <div>
    <h2>{{ suppName }}</h2>
    <p :style="{color:  suppAvailable === 1 ? 'lightgreen': 'red'}">{{ suppAvailable === 1 ? 'Disponible': 'Indisponible'}}</p>
    <p>Date de dernière relevé des stocks : {{ suppLastRefresh }}</p>
  </div>
</template>

<style scoped>
div {
  color: white;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom :1px solid black;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  //background: cornflowerblue;
  transition: all 0.5s ease-out;
}
h2 {
  font-size: 30px;
}
div:hover{
  backdrop-filter: blur(30px);
}
</style>
<script setup>
import supplierCard from "./supplierCard.vue"
import {supplierList} from "@/data.js";
import {ref} from "vue";

const filtre = ref("3")

</script>

<template>

  <div class="List">
    <select id="select-tri" v-model="filtre">
      <option value="3">Toutes disponibilité</option>
      <option value="0">Disponible</option>
      <option value="1">Indisponible</option>
    </select>
    <supplierCard v-for="(supplier, ind) in supplierList" :key=ind :infos=supplier :filtre="filtre"></supplierCard>
  </div>
</template>

<style scoped>
.List {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
}
select{
  align-self: flex-end;
  padding: .5rem;
  font-size: 20px;
  border-radius: 5px;
}
option:nth-child(2){
  color: forestgreen;
}
option:nth-child(3){
  color: red;
}
</style>
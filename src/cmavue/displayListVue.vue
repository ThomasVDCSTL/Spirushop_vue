<script setup>
import supplierCard from "./supplierCard.vue"
import {supplierList} from "@/data.js";
import {ref} from "vue";

const filtre = ref("1")

</script>

<template>

  <div class="List">
    <label for="select-tri">Trier par disponibilité</label>
    <select id="select-tri">
      <option value="">Toutes disponibilité</option>
      <option value="1">Disponible</option>
      <option value="0">Indisponible</option>
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
</style>
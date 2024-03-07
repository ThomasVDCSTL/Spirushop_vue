<script setup>
import supplierCard from "./supplierCard.vue"
import {supplierList, createSupplier} from "@/DTO.js";
import {ref} from "vue";

const newSupp = ref(false)

const newName = ref("bite")
const newCheckedAt = ref(new Date())
const newStatus = ref("")
const newLat = ref("")
const newLong = ref("")
const filtre = ref("3")

function handleClick (){
  console.log({
    name:newName.value,
    checkedAt:newCheckedAt.value,
    status:newStatus.value,
    latitude:newLat.value,
    longitude:newLong.value
  })
}

</script>

<template>

  <div class="List">
    <div class="listHeader">
      <button @click="newSupp=!newSupp">Créer Supplier</button>
      <div v-show="newSupp">
        <input v-model="newName" type="text">
        <input v-model="newStatus" type="text">
        <input v-model="newLat" type="text">
        <input v-model="newLong" type="text">
        <button @click="handleClick">Valider</button>
      </div>
      <select id="select-tri" v-model="filtre">
        <option value="3">Toutes disponibilités </option>
        <option value="0">Disponible</option>
        <option value="1">Indisponible</option>
      </select>
    </div>
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
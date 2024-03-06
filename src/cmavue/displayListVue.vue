<script setup>
import supplierCard from "./supplierCard.vue"
import {supplierList} from "@/data.js";

</script>

<template>
  <div class="List">
    <supplierCard v-for="(supplier, ind) in supplierList" :key=ind :infos=supplier></supplierCard>
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
<script setup>
import REELAPPAKHI from './REELAPPAKHI.vue'
import Header, {aboutPage} from './cmavue/header.vue'

</script>


<template>
  <Header></Header>
  <REELAPPAKHI v-if="!aboutPage"></REELAPPAKHI>
</template>

<style scoped>

</style>
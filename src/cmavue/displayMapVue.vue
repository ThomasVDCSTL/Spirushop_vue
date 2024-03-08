<script>
import 'leaflet/dist/leaflet.css'
import { LIcon, LMap, LMarker, LPopup, LTileLayer, LTooltip } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import { supplierList } from '@/DTO.js'

export default {
  components: {
    LTooltip,
    LPopup,
    LIcon,
    LMarker,
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 2,
      iconSize: 30,
      iconUrl: 'https://cdn-icons-png.flaticon.com/256/7550/7550755.png',
      supplierList: supplierList
    }
  }
}
console.log(L)
</script>

<template>
  <div style="height:600px; width:50vw">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="supplier in supplierList" :lat-lng="[supplier.latitude, supplier.longitude]" :key="supplier.id">
        <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
        <l-popup>
          {{ supplier.name }}
        </l-popup>
        <l-tooltip>
          {{ supplier.status ? 'A du stock' : 'N\'a pas de stock' }}
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<style scoped>
div{
  margin-top: 2rem;
}




</style>
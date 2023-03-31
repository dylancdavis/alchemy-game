<script setup>
import CoresPanel from "./CoresPanel.vue";
import ActivitiesPanel from "./ActivitiesPanel.vue";
</script>

<template>
  <v-main fluid id="panels-container">
    <v-row class="fill-height">
      <v-col class="fill-height">
        <ActivitiesPanel />
      </v-col>
      <v-col class="fill-height">
        <CoresPanel />
      </v-col>
    </v-row>
  </v-main>
</template>

<style scoped>
#panels-container {
  background-color: darkgray;
  padding: 16px;
}
</style>

<script setup>
import GameBanner from "./components/GameBanner.vue";
import GamePanels from "./components/GamePanels.vue";
</script>

<template>
  <v-app id="content">
    <GameBanner />
    <GamePanels />
  </v-app>
</template>

<style scoped>
* {
  font-family: "Open Sans";
}
</style>

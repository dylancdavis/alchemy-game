<script setup>
import GameBanner from "./components/GameBanner.vue";
import EssencePanels from "./components/EssencePanels.vue";
</script>

<template>
  <v-app id="content">
    <GameBanner />
    <EssencePanels />
  </v-app>
</template>

<style scoped>
* {
  font-family: "Open Sans";
}
</style>

<script setup>
import EssencePanels from "./components/EssencePanels.vue";
</script>

<template>
  <v-app id="content">
    <h1>Alchemy Game</h1>
    <EssencePanels />
  </v-app>
</template>

<style scoped>
* {
  font-family: "Open Sans";
}

h1 {
  background-color: rgb(75, 75, 75);
  color: white;
  padding: 16px;
  padding-left: 64px;
  font-size: 64px;
  font-weight: bold;
  text-shadow: 3px 3px 3px black;
}
</style>

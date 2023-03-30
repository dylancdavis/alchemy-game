<script setup>
import EssencePanels from './components/EssencePanels.vue'
</script>

<template>
  <v-app id="content">
    <header>Alchemy Game</header>
    <EssencePanels />
  </v-app>
</template>

<style scoped> 

* {
  font-family: 'Open Sans';
}

#content {
  display: grid;
  grid-template-rows: min-content 1fr
}

header {
  background-color: rgb(75, 75, 75);
  color: white;
  padding: 16px;
  padding-left: 64px;
  font-size: 64px;
  font-weight: bold;
  text-shadow: 3px 3px 3px black;
}

#main-content {
  display: flex;
  width: 100%;
  height: 100%;
}

#main-content > div {
  background-color: rgb(58, 58, 58);
  color: white;
  height: 100%;
}

#left-panel {
  font-size: 24px;
  padding: 16px;
  width: 30%;
}

#right-panel {
  font-size: 24px;
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px
}

#right-panel>div {
  flex: 1;
}

.white-border {
  border: 2px solid white;
  padding: 8px;
  border-radius: 16px;
  background-color: rgb(48, 48, 48);
}



</style>

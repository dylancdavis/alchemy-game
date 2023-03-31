<script setup>
import { ref } from "vue";
const selectedTab = ref("tasks");
</script>

<template>
  <v-sheet class="elevation-4" id="text-panel">
    <v-tabs
      v-model="selectedTab"
      grow
      bg-color="#333"
      slider-color="info"
      color="white"
    >
      <v-tab value="tasks" v-ripple="false">Tasks</v-tab>
      <v-tab value="research" v-ripple="false">Research</v-tab>
    </v-tabs>
    <v-window v-model="selectedTab">
      <v-window-item value="tasks"> Idle </v-window-item>
      <v-window-item value="research">
        <h1>Notebook</h1>
        <div>Data: {{ data }}</div>
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<style scoped>
.v-tab {
  color: #bbb;
}
</style>

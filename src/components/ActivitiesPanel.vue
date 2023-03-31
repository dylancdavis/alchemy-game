<script setup>
import { ref } from "vue";
import TaskInfo from "./TaskInfo.vue";
const selectedTab = ref("research");
const data = ref(0);
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
      <v-tab value="research" v-ripple="false">Research</v-tab>
    </v-tabs>
    <v-window v-model="selectedTab">
      <v-window-item value="research">
        <h1>Notebook</h1>
        <div>Data: {{ data }}</div>
      </v-window-item>
    </v-window>
    <v-divider class="border-opacity-100" />
    <TaskInfo />
  </v-sheet>
</template>

<style scoped>
.v-window-item {
  padding: 24px;
}
.v-tab {
  color: #bbb;
}
</style>

<script setup>
import { ref } from "vue";
import TaskInfo from "./TaskInfo.vue";
import { useScienceStore } from "@/stores/ScienceStore";

const selectedTab = ref("research");
const science = useScienceStore();
</script>

<template>
  <v-sheet class="elevation-4 fill-height panel">
    <div>
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
          <div>Data: {{ science.data }}</div>
        </v-window-item>
      </v-window>
    </div>
    <div>
      <v-divider class="border-opacity-75" />
      <TaskInfo />
    </div>
  </v-sheet>
</template>

<style scoped>
.v-window-item {
  padding: 24px;
}

.v-tab {
  color: #bbb;
}

.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

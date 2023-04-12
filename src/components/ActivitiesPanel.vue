<script setup>
import { ref } from "vue";
import TaskInfo from "./TaskInfo.vue";
import ResearchTab from "./ResearchTab.vue";

const selectedTab = ref("research");
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
        <ResearchTab />
      </v-window>
    </div>
    <div>
      <v-divider class="border-opacity-75" />
      <TaskInfo />
    </div>
  </v-sheet>
</template>

<style scoped>
.v-tab {
  color: #bbb;
}

.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

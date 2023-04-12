<script setup>
import { ref } from "vue";
import CoresDiagram from "./CoresDiagram.vue";
import SelectedCoreDisplay from "./SelectedCoreDisplay.vue";

const selectedCore = ref(null);
const selectedTab = ref("cores");

const selectCore = (name) => {
  selectedCore.value = name;
};
</script>

<template>
  <v-sheet class="elevation-4 fill-height panel">
    <div>
      <v-tabs
        :v-model="selectedTab"
        grow
        bg-color="#333"
        slider-color="grey"
        color="white"
      >
        <v-tab value="cores" v-ripple="false">Core</v-tab>
      </v-tabs>
    </div>
    <v-window v-model="selectedTab" class="fill-height">
      <v-window-item value="research" class="fill-height">
        <SelectedCoreDisplay :selectedCore="selectedCore" />
        <CoresDiagram
          @click="selectedCore = null"
          :selectCore="selectCore"
          :selectedCore="selectedCore"
        />
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
}

.v-window-item {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

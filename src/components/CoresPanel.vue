<script setup>
import { ref } from "vue";
import CoresDiagram from "./CoresDiagram.vue";
import { useCoresStore } from "@/stores/CoreStore";
import { useTaskStore } from "@/stores/TaskStore";
import { useScienceStore } from "@/stores/ScienceStore";

const core = useCoresStore();
const task = useTaskStore();
const science = useScienceStore();

console.log(science);

const selectedCore = ref(null);
const selectedTab = ref("cores");

const disableGatherData = ref(false);

const onGatherData = () => {
  console.log("onGatherData triggered");
  disableGatherData.value = true;
  task.setTask({
    name: "Gathering Data",
    work: 100,
    onComplete: () => {
      console.log("Gathered Data");
      science.incrementDataBy(5);
      disableGatherData.value = false;
    },
    onCancel: () => {
      console.log("Gather Data Cancelled");
    },
  });
};

const selectCore = (name) => {
  selectedCore.value = name;
};

const expandCore = () => {
  core.incrementEssenceBy(4);
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
        <v-container v-if="selectedCore === null">No Core Selected</v-container>
        <v-container v-if="selectedCore === 'true'">
          <h1>Essence Core</h1>
          <v-btn
            :ripple="false"
            class="gather"
            @click="onGatherData"
            :disabled="disableGatherData"
            >Gather Data</v-btn
          >
          <v-btn :ripple="false" @click="expandCore">Expand</v-btn>
          <v-btn :ripple="false" @click="contractCore" v-show="showContract"
            >Contract</v-btn
          >
        </v-container>
        <CoresDiagram @click="selectedCore = null" :selectCore="selectCore" />
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
}
</style>

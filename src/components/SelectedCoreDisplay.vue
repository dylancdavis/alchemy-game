<script setup>
import { defineProps } from "vue";
import { useCoresStore } from "@/stores/CoreStore";
import { useScienceStore } from "@/stores/ScienceStore";
import TaskButton from "./TaskButton.vue";

const core = useCoresStore();
const science = useScienceStore();

const props = defineProps(["selectedCore"]);
</script>

<template>
  <v-container v-if="props.selectedCore === 'true'">
    <div class="flex">
      <h1>Essence Core</h1>
      <h2 v-if="science.quantification">
        ({{ core.essence }}/{{ core.essenceMax }})
      </h2>
    </div>
    <div class="button-box">
      <TaskButton taskId="gatherData" name="Gather Data" />
      <TaskButton
        v-if="science.manipulation"
        taskId="expandCore"
        name="Expand Core"
      />
      <TaskButton
        v-if="science.manipulation"
        taskId="contractCore"
        name="Contract Core"
      />
    </div>
  </v-container>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
  gap: 1em;
}

h2 {
  font-weight: normal;
  font-size: medium;
}
.v-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background-color: white;
  box-shadow: 0px 3px 3px 0px rgb(182, 182, 182);
}

.button-box {
  display: flex;
  gap: 1em;
  padding: 1em;
}
</style>

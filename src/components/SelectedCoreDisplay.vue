<script setup>
import { ref, defineProps } from "vue";
import { useCoresStore } from "@/stores/CoreStore";
import { useTaskStore } from "@/stores/TaskStore";
import { useScienceStore } from "@/stores/ScienceStore";

const core = useCoresStore();
const task = useTaskStore();
const science = useScienceStore();

const props = defineProps(["selectedCore"]);

const disableGatherData = ref(false);
const disableExpandCore = ref(false);

const onGatherData = () => {
  console.log("onGatherData triggered");
  disableGatherData.value = true;
  task.setTask({
    name: "Gathering Data",
    work: 100,
    color: "info",
    onComplete: () => {
      console.log("Gathered Data");
      science.incrementDataBy(5);
      disableGatherData.value = false;
    },
    onCancel: () => {
      console.log("Gather Data Cancelled");
      disableGatherData.value = false;
    },
  });
};

const expandCore = () => {
  console.log("expandCore triggered");
  disableExpandCore.value = true;
  task.setTask({
    name: "Expanding Core",
    work: 20,
    color: "info",
    onComplete: () => {
      console.log("Expanded Core");
      core.incrementEssenceBy(4);
      disableExpandCore.value = false;
    },
    onCancel: () => {
      console.log("Expand Core Cancelled");
      disableExpandCore.value = false;
    },
  });
};

const contractCore = () => {
  console.log("triggered contractCore");
  core.contractCore();
};
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
      <v-btn
        class="gradient-button purple"
        @click="onGatherData"
        :disabled="disableGatherData"
        >Gather Data</v-btn
      >
      <v-btn
        class="gradient-button blue"
        @click="expandCore"
        :disabled="disableExpandCore"
        v-show="science.manipulation"
        >Expand</v-btn
      >
      <v-btn
        class="gradient-button red"
        @click="contractCore"
        v-show="science.manipulation"
        >Contract</v-btn
      >
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

.gradient-button {
  position: relative;
  z-index: 1;
}

.gradient-button::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
  border-radius: inherit;
}

.gradient-button.purple {
  background-color: #f9dcff;
}

.gradient-button.purple::before {
  background-image: linear-gradient(45deg, #f9dcff 0%, #ceb1fd 100%);
}

.gradient-button.blue {
  background-color: #dbfaff;
}

.gradient-button.blue::before {
  background-image: linear-gradient(45deg, #dbfaff 0%, #b1c0fc 100%);
}

.gradient-button.red {
  background-color: #ffdbdb;
}

.gradient-button.red::before {
  background-image: linear-gradient(45deg, #ffdbdb 0%, #fcb1b1 100%);
}

.gradient-button:hover::before {
  opacity: 1;
}
</style>

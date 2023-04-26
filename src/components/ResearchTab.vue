<script setup>
import { computed } from "vue";
import { useScienceStore } from "@/stores/ScienceStore";
import { useTaskRunnerStore } from "@/stores/TaskRunnerStore";
import ResearchItem from "./ResearchItem.vue";
import { doTask } from "@/logic/TasksHandler";

const science = useScienceStore();
const task = useTaskRunnerStore();

// Only allow clickable button if task isn't running AND data exist
const disableStudyKnowledge = computed(() => {
  return task.id === "studyData" || science.data <= 0;
});

const onStudyKnowledge = () => {
  doTask("studyData");
};

const onResearchManipulation = () => {
  doTask("researchManipulation");
};

const onResearchQuantification = () => {
  doTask("researchQuantification");
};
</script>

<template>
  <v-table>
    <tbody>
      <tr>
        <td><h2>Data</h2></td>
        <td>
          <h2>{{ science.data }}</h2>
        </td>
        <td>
          <v-btn @click="onStudyKnowledge" :disabled="disableStudyKnowledge"
            >Study Data</v-btn
          >
        </td>
      </tr>
      <tr>
        <td><h2>Knowledge</h2></td>
        <td>
          <h2>{{ science.knowledge }}</h2>
        </td>
      </tr>
    </tbody>
  </v-table>
  <v-divider class="border-opacity-75" />
  <v-sheet class="fill-height theories">
    <h3>Theories</h3>
    <v-expansion-panels variant="accordion">
      <ResearchItem
        :visible="!science.manipulation"
        name="Manipulation Methods"
        chip="core theory"
        cost="5"
        description="basic methods to interact with essence cores"
        :disabled="science.knowledge < 5"
        :onClick="onResearchManipulation"
      />
      <ResearchItem
        :visible="!science.quantification"
        name="Quantification Methods"
        chip="core theory"
        cost="2"
        description="determine quantities of essence within cores"
        :disabled="science.knowledge < 2"
        :onClick="onResearchQuantification"
      />
    </v-expansion-panels>
  </v-sheet>
</template>

<style scoped>
.theories {
  border-bottom: 1px solid grey;
}

h3 {
  padding: 1em;
  background-color: lavender;
}

.v-card {
  padding: 1em;
}
</style>

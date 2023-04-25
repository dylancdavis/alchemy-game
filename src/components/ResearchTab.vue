<script setup>
import { ref, computed } from "vue";
import { useScienceStore } from "@/stores/ScienceStore";
import { useTaskStore } from "@/stores/TaskStore";
import ResearchItem from "./ResearchItem.vue";

const science = useScienceStore();
const task = useTaskStore();
const studyKnowledgeRunning = ref(false);

// Only allow clickable button if task isn't running AND data exist
const disableStudyKnowledge = computed(() => {
  return studyKnowledgeRunning.value || science.data <= 0;
});

const onStudyKnowledge = () => {
  task.setTask({
    name: "Studying Data",
    work: 40,
    color: "primary",
    onComplete: () => {
      console.log("Studied Data");
      science.convertDataToKnowledge();
      studyKnowledgeRunning.value = false;
    },
    onCancel: () => {
      console.log("Study Data Cancelled");
      studyKnowledgeRunning.value = false;
    },
  });
  studyKnowledgeRunning.value = true;
};

const onResearchManipulation = () => {
  console.log("onResearchManipulation triggered");
  task.setTask({
    name: "Researching Manipulation Methods",
    work: 50,
    color: "primary",
    onComplete: () => {
      console.log("Researched Manipulation Methods");
      science.unlockManipulation();
    },
    onCancel: () => {
      console.log("Research Manipulation Methods Cancelled");
    },
  });
};

const onResearchQuantification = () => {
  console.log("onResearchQuantification triggered");
  task.setTask({
    name: "Researching Quantification Methods",
    work: 50,
    color: "primary",
    onComplete: () => {
      console.log("Researched Quantification Methods");
      science.unlockQuantification();
    },
    onCancel: () => {
      console.log("Research Quantification Methods Cancelled");
    },
  });
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
    <h3>Research</h3>
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
  padding: 1em;
}

.v-card {
  padding: 1em;
}
</style>

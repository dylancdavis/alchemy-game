<script setup>
import { ref, computed } from "vue";
import { useScienceStore } from "@/stores/ScienceStore";
import { useTaskStore } from "@/stores/TaskStore";

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
    work: 500,
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
</script>

<template>
  <v-window-item value="research">
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
    <div>
      <v-btn
        v-if="!science.manipulation"
        @click="onResearchManipulation"
        :disabled="science.knowledge < 5"
        >Theory: Manipulation Methods (5 knowledge)</v-btn
      >
    </div>
  </v-window-item>
</template>

<style scoped>
.v-window-item {
  padding: 24px;
}
</style>

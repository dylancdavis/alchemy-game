<script setup>
import { useScienceStore } from "@/stores/ScienceStore";
import ResearchItem from "./ResearchItem.vue";
import TaskButton from "./TaskButton.vue";

const science = useScienceStore();
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
          <TaskButton taskId="studyData" />
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
      <ResearchItem researchId="manipulation" />
      <ResearchItem researchId="quantification" />
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

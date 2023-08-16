<script setup>
import { useScienceStore } from "@/stores/ScienceStore";
import { useResearchStore } from "@/stores/ResearchStore";
import ResearchItem from "./ResearchItem.vue";
import TaskButton from "./TaskButton.vue";

const science = useScienceStore();
const research = useResearchStore();
</script>

<template>
  <div class="container">
    <v-card>
      <v-table>
        <tbody>
          <tr>
            <td><h2>Data</h2></td>
            <td>
              <h2>{{ science.data }}</h2>
            </td>
            <td>
              <TaskButton
                v-if="research.completed.has('basicResearch')"
                taskId="studyData"
              />
            </td>
          </tr>
          <tr v-show="research.completed.has('basicResearch')">
            <td><h2>Knowledge</h2></td>
            <td>
              <h2>{{ science.knowledge }}</h2>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <v-card class="fill-height theories">
      <h3>Theories</h3>
      <v-expansion-panels variant="accordion" multiple>
        <ResearchItem
          v-for="r in [...research.available]"
          :key="r"
          :researchId="r"
        />
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<style scoped>
h3 {
  padding: 1em;
  background-color: rgb(52, 52, 52);
  color: white;
}

.container {
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

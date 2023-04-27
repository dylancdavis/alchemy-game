<script setup>
import { defineProps } from "vue";
import { useResearchStore } from "../stores/ResearchStore";
import TaskButton from "./TaskButton.vue";

const props = defineProps(["researchId"]);
const ResearchStore = useResearchStore();
const research = ResearchStore.getResearch(props.researchId);
</script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <div class="research-title">
        <h3>{{ research.display.name }}</h3>
        <v-chip>{{ research.tag }}</v-chip>
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <div class="flex">
        <h4 v-if="research.costs">
          Cost: {{ research.costs.knowledge }} Knowledge
        </h4>
        <p>{{ research.display.description }}</p>
        <TaskButton :taskId="research.taskId" />
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.research-title {
  display: flex;
  align-items: center;
  gap: 1em;
}

.flex {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-around;
}
</style>

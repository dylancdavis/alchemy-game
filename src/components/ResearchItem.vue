<script setup>
import { defineProps } from "vue";
import TaskButton from "./TaskButton.vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps([
  "visible",
  "name",
  "chip",
  "cost",
  "description",
  "taskId",
]);
</script>

<template>
  <v-expansion-panel v-if="visible">
    <v-expansion-panel-title>
      <div class="research-title">
        <h3>{{ name }}</h3>
        <v-chip>{{ chip }}</v-chip>
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <h5>Cost: {{ cost }} Knowledge</h5>
      <p>{{ description }}</p>
      <TaskButton :taskId="props.taskId" />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.research-title {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>

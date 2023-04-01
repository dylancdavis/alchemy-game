<script setup>
import { computed } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const task = useTaskStore();

const taskColor = computed(() => {
  return task.color() ?? "#000";
});
</script>

<template>
  <v-sheet bg-color="#888">
    <h2>{{ task.name() ?? "Idle" }}</h2>
    <v-progress-linear
      height="10"
      :color="taskColor"
      rounded
      :model-value="task.percentComplete"
    />
  </v-sheet>
</template>

<style scoped>
.v-sheet {
  width: 100%;
  height: 100%;
  padding: 24px;
}

h2 {
  margin-bottom: 8px;
}
</style>

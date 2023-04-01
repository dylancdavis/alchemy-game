<script setup>
import { useTaskStore } from "../stores/TaskStore";

const task = useTaskStore();
</script>

<template>
  <v-sheet bg-color="#888">
    <h2>{{ task.taskName ?? "Idle" }}</h2>
    <v-progress-linear
      height="10"
      color="info"
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

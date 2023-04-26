<script setup>
import { computed } from "vue";
import { useTaskRunnerStore } from "../stores/TaskRunnerStore";

const task = useTaskRunnerStore();

const taskColor = computed(() => {
  return task.color ?? "#000";
});
</script>

<template>
  <v-sheet bg-color="#888">
    <div class="task-display">
      <h2>{{ task.name ?? "Idle" }}</h2>
      <v-btn v-if="task.name" @click="task.cancelTask">X</v-btn>
    </div>
    <v-progress-linear
      height="10"
      :color="taskColor"
      rounded
      :model-value="task.percentComplete"
      :class="task.name ? '' : 'no-transition'"
    />
  </v-sheet>
</template>

<style scoped>
.v-sheet {
  width: 100%;
  height: 100%;
  padding: 24px;
}

.task-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-btn {
  font-weight: bold;
  background-color: rgb(255, 218, 218);
}

h2 {
  margin-bottom: 8px;
}

.no-transition {
  transition: none;
}
</style>

<script setup>
import { ref } from "vue";

const currentTask = ref(null);
const taskProgress = ref(null);
</script>

<template>
  <v-sheet bg-color="#888">
    <h2>{{ currentTask ?? "Idle" }}</h2>
    <v-progress-linear
      height="10"
      color="black"
      rounded
      :model-value="taskProgress"
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

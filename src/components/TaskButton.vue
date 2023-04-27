<script setup>
import { computed, defineProps } from "vue";
import { useTaskRunnerStore } from "@/stores/TaskRunnerStore";
import { useTaskHandlerStore } from "@/stores/TaskHandlerStore";
import chroma from "chroma-js";

const props = defineProps(["taskId"]);
const TaskRunner = useTaskRunnerStore();
const TasksHandler = useTaskHandlerStore();

const task = TasksHandler.getTask(props.taskId);

const disableTask = computed(() => {
  return TaskRunner.id === props.taskId;
});

const gradientStyle = computed(() => {
  return {
    backgroundColor: task.display.color,
  };
});

// eslint-disable-next-line no-unused-vars
const gradientBeforeStyle = computed(() => {
  return {
    backgroundImage: `linear-gradient(45deg, ${task.color} 0%, ${chroma(
      task.color
    )
      .darken()
      .hex()} 100%)`,
  };
});
</script>

<template>
  <v-btn
    :style="gradientStyle"
    class="gradient-button purple"
    @click="TaskRunner.setTask(props.taskId)"
    :disabled="disableTask"
    :color="task.display.color"
  >
    {{ task.display.infinitiveName }}
    <v-tooltip activator="parent" location="top" open-delay="1000">
      <div>{{ task.description ?? "task description missing" }}</div>
    </v-tooltip>
  </v-btn>
</template>

<style scoped>
.gradient-button {
  position: relative;
  z-index: 1;
}

.gradient-button::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transition: opacity 0.5s linear;
  opacity: 0;
  border-radius: inherit;
}

.gradient-button:hover::before {
  opacity: 1;
}
</style>

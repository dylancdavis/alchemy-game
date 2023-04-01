// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("TaskStore", () => {
  const task = ref(null);
  const currentInterval = ref(null);
  const taskProgress = ref(0);
  const taskProgressMax = ref(100);
  const taskProgressIncrement = ref(1);

  function setTask(newTask) {
    task.value = newTask;
    if (newTask)
      currentInterval.value = setInterval(incrementTaskProgress, 1000);
  }

  function incrementTaskProgress() {
    taskProgress.value += taskProgressIncrement.value;
    if (taskProgress.value >= taskProgressMax.value) {
      console.log(`Task ${task.value.name} complete!`);
      taskProgress.value = 0;
      currentInterval.value = clearInterval(currentInterval.value);
      task.value = null;
    }
  }

  return {
    task,
    taskProgress,
    taskProgressMax,
    taskProgressIncrement,
    setTask,
    incrementTaskProgress,
  };
});

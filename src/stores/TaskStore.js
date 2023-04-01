// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("TaskStore", () => {
  const taskName = ref(null);
  const workLeft = ref(0);
  const callback = ref(null);
  const currentInterval = ref(null);

  function doTaskWork() {
    if (workLeft.value > 0) {
      workLeft.value--;
    } else {
      callback.value();
      currentInterval.value = clearInterval(currentInterval);
    }
  }

  function setTask(newTask) {
    if (!newTask) return;
    const { name, work, callback } = newTask;
    taskName.value = name;
    workLeft.value = work;
    callback.value = callback;
    currentInterval.value = setInterval(doTaskWork, 1000);
  }

  return { setTask };
});

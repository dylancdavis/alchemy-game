// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTaskStore = defineStore("TaskStore", () => {
  const taskName = ref(null);
  const workLeft = ref(0);
  const initialWork = ref(0);
  const taskCallback = ref(null);
  const currentInterval = ref(null);

  const percentComplete = computed(() => {
    return ((initialWork.value - workLeft.value) / initialWork.value) * 100;
  });

  function doTaskWork() {
    console.log(
      "doing task work",
      taskName.value,
      workLeft.value,
      percentComplete.value
    );
    if (workLeft.value > 0) {
      workLeft.value--;
    } else {
      taskCallback.value();
      resetTask();
    }
  }

  function resetTask() {
    console.log("resetting task");
    taskName.value = null;
    workLeft.value = 0;
    initialWork.value = 0;
    taskCallback.value = null;
    currentInterval.value = clearInterval(currentInterval.value);
  }

  function setTask(newTask) {
    console.log("setTask", newTask);
    console.log("hello?");
    const name = newTask.name;
    const work = newTask.work;
    const callback = newTask.callback;
    taskName.value = name;
    initialWork.value = work;
    workLeft.value = work;
    taskCallback.value = callback;
    currentInterval.value = setInterval(doTaskWork, 50);
    console.log("success", name, work, callback);
  }

  return { taskName, workLeft, setTask, percentComplete };
});

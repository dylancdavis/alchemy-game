// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTaskStore = defineStore("TaskStore", () => {
  const taskName = ref(null);
  const workLeft = ref(0);
  const initialWork = ref(0);
  const taskOnComplete = ref(null);
  const taskOnCancel = ref(null);
  const currentInterval = ref(null);

  const percentComplete = computed(() => {
    if (initialWork.value === 0) return 0;
    return ((initialWork.value - workLeft.value) / initialWork.value) * 100;
  });

  function doTaskWork() {
    if (workLeft.value > 0) {
      workLeft.value--;
    } else {
      taskOnComplete.value();
      resetTask();
    }
  }

  function resetTask() {
    console.log("resetting task");
    taskName.value = null;
    workLeft.value = 0;
    initialWork.value = 0;
    taskOnComplete.value = null;
    taskOnCancel.value = null;
    currentInterval.value = clearInterval(currentInterval.value);
  }

  function setTask(newTask) {
    console.log("setTask", newTask);
    console.log("hello?");
    const name = newTask.name;
    const work = newTask.work;
    const onComplete = newTask.onComplete;
    const onCancel = newTask.onCancel;
    taskName.value = name;
    initialWork.value = work;
    workLeft.value = work;
    taskOnComplete.value = onComplete;
    taskOnCancel.value = onCancel;
    currentInterval.value = setInterval(doTaskWork, 50);
    console.log("success", name, work, onComplete, onCancel);
  }

  return { taskName, workLeft, setTask, percentComplete };
});

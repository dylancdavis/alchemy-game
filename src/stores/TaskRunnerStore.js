// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTaskRunnerStore = defineStore("TaskRunnerStore", () => {
  const task = ref(null);
  const currentInterval = ref(null);

  const percentComplete = computed(() => {
    if (!task.value) return 0;
    return (
      ((task.value.initialWork - task.value.workLeft) /
        task.value.initialWork) *
      100
    );
  });

  function doTaskWork() {
    if (task.value.workLeft > 0) {
      task.value.workLeft--;
    } else {
      task.value.onComplete();
      resetTask();
    }
  }

  function resetTask() {
    console.log("resetting task");
    task.value = null;
    currentInterval.value = clearInterval(currentInterval.value);
  }

  function name() {
    if (task.value) {
      return task.value.name;
    } else {
      return null;
    }
  }

  function color() {
    if (task.value) {
      return task.value.color;
    } else {
      return null;
    }
  }

  function setTask(newTask) {
    if (task.value) {
      // Cancel the current task
      cancelTask();
    }
    const { name, work, color, onComplete, onCancel } = newTask;
    task.value = {
      name,
      initialWork: work,
      workLeft: work,
      color,
      onComplete,
      onCancel,
    };
    currentInterval.value = setInterval(doTaskWork, 50);
  }

  function cancelTask() {
    if (task.value.onCancel) task.value.onCancel();
    resetTask();
  }

  return { setTask, cancelTask, name, color, percentComplete };
});

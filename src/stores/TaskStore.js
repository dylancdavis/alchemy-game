// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTaskStore = defineStore("TaskStore", () => {
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

  function taskName() {
    if (task.value) {
      return task.value.name;
    } else {
      return null;
    }
  }

  function setTask(newTask) {
    if (task.value) {
      // Cancel the current task
      task.value.onCancel();
      resetTask();
    }
    const { name, work, onComplete, onCancel } = newTask;
    task.value = {
      name,
      initialWork: work,
      workLeft: work,
      onComplete,
      onCancel,
    };
    currentInterval.value = setInterval(doTaskWork, 50);
  }

  return { setTask, taskName, percentComplete };
});

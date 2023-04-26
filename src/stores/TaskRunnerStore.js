// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTaskRunnerStore = defineStore("TaskRunnerStore", () => {
  // State
  const task = ref(null);
  const currentInterval = ref(null);

  // Getter Functions / Computed Properties
  const percentComplete = computed(() => {
    return task.value
      ? ((task.value.initialWork - task.value.workLeft) /
          task.value.initialWork) *
          100
      : 0;
  });

  const id = computed(() => (task.value ? task.value.id : null));
  const name = computed(() => (task.value ? task.value.display.name : null));
  const color = computed(() => (task.value ? task.value.display.color : null));

  // Methods / Actions
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

  function setTask(newTask) {
    if (task.value) {
      // Cancel the current task
      cancelTask();
    }
    const { id, display, work, onComplete, onCancel } = newTask;
    task.value = {
      id,
      display,
      initialWork: work,
      workLeft: work,
      onComplete,
      onCancel,
    };
    currentInterval.value = setInterval(doTaskWork, 50);
  }

  function cancelTask() {
    if (task.value.onCancel) task.value.onCancel();
    resetTask();
  }

  return { setTask, cancelTask, id, name, color, percentComplete };
});

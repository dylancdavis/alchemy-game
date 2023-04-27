// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useTaskHandlerStore } from "./TaskHandlerStore";

export const useTaskRunnerStore = defineStore("TaskRunnerStore", () => {
  // Task Handler Store, for accessing values
  const TaskHandler = useTaskHandlerStore();
  // State
  const id = ref(null);
  const workRequired = ref(0);
  const workCompleted = ref(0);
  const workInterval = ref(null);
  const name = ref(null);
  const color = ref(null);

  // Getter Functions / Computed Properties
  const percentComplete = computed(() => {
    return id.value ? (workCompleted.value / workRequired.value) * 100 : 0;
  });

  // Methods / Actions
  function doTaskWork() {
    if (workCompleted.value < workRequired.value) {
      workCompleted.value++;
    } else {
      TaskHandler.completeTask(id.value);
      reset();
    }
  }

  function cancelTask() {
    TaskHandler.cancelTask(id.value);
    reset();
  }

  function reset() {
    // Reset values to default
    console.log("resetting task runner store");
    id.value = null;
    workRequired.value = 0;
    workCompleted.value = 0;
    workInterval.value = clearInterval(workInterval.value);
    name.value = null;
    color.value = null;
  }

  function setTask(taskId) {
    if (id.value) {
      // Cancel the current task if there is one running
      cancelTask();
    }

    // Fetch task data from the TaskHandler store
    const newTask = TaskHandler.getTask(taskId);
    if (!newTask) {
      console.error(`Task '${taskId}' not found!`);
      return;
    }

    // Set store values to obtained task values
    id.value = taskId;
    workRequired.value = newTask.work;
    name.value = newTask.display.presentName;
    color.value = newTask.display.color;
    workInterval.value = setInterval(doTaskWork, 50);
  }

  return { setTask, cancelTask, id, name, color, percentComplete };
});

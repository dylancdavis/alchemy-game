// Create a new store to manage the current task

import { defineStore } from "pinia";
import { ref } from "vue";
import { useScienceStore } from "./ScienceStore";
import { useCoresStore } from "./CoreStore";
import { useResearchStore } from "./ResearchStore";

export const useTaskHandlerStore = defineStore("TaskHandlerStore", () => {
  // State
  const tasks = ref({
    gatherData: {
      display: {
        presentName: "Observing Core",
        infinitiveName: "Observe",
        color: "grey-darken-1",
      },
      work: 100,
      onComplete: () => {
        const science = useScienceStore();
        science.incrementDataBy(5);
      },
    },
    studyData: {
      display: {
        presentName: "Studying Data",
        infinitiveName: "Study Data",
        color: "grey-darken-1",
      },
      costs: {
        data: 1,
      },
      work: 20,
      onComplete: () => {
        const science = useScienceStore();
        science.studyData();
      },
    },
    expandCore: {
      display: {
        presentName: "Expanding Core",
        infinitiveName: "Expand",
        color: "blue-lighten-3",
      },
      work: 20,
      onComplete: () => {
        const core = useCoresStore();
        core.expandCore(5);
      },
    },
    contractCore: {
      display: {
        presentName: "Contracting Core",
        infinitiveName: "Contract",
        color: "orange-lighten-3",
      },
      work: 100,
      onComplete: () => {
        const core = useCoresStore();
        core.contractCore();
      },
    },
    researchManipulation: {
      display: {
        presentName: "Researching Manipulation Methods",
        infinitiveName: "Research",
        color: "purple",
      },
      work: 20,
      onComplete: () => {
        const research = useResearchStore();
        research.complete("manipulation");
      },
    },
    researchQuantification: {
      display: {
        presentName: "Researching Quantification Methods",
        infinitiveName: "Research",
        color: "purple",
      },
      work: 20,
      onComplete: () => {
        const research = useResearchStore();
        research.complete("quantification");
      },
    },
  });

  function getTask(taskId) {
    const ret = tasks.value[taskId];
    if (!ret) console.error(`Task '${taskId}' not found!`);
    return ret;
  }

  function setTask(taskId, newTask) {
    tasks.value[taskId] = newTask;
  }

  function completeTask(taskId) {
    tasks.value[taskId].onComplete();
  }

  function cancelTask(taskId) {
    const task = tasks.value[taskId];
    if (task.onCancel) task.onCancel();
  }

  return { getTask, setTask, cancelTask, completeTask };
});

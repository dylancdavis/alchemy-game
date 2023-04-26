import { useScienceStore } from "@/stores/ScienceStore";
import { useCoresStore } from "@/stores/CoreStore";
import { useTaskRunnerStore } from "@/stores/TaskRunnerStore";

let tasks = {
  gatherData: {
    id: "gatherData",
    display: {
      name: "Gathering Data",
      color: "primary",
    },
    work: 100,
    onComplete: () => {
      const science = useScienceStore();
      science.incrementDataBy(5);
    },
  },
  expandCore: {
    id: "expandCore",
    display: {
      name: "Expanding Core",
      color: "info",
    },
    work: 20,
    onComplete: () => {
      const core = useCoresStore();
      core.incrementEssenceBy(5);
    },
  },
};

export const changeTaskWork = (taskName, newWorkVal) => {
  tasks[taskName].work = newWorkVal;
};

export const doTask = (taskId) => {
  const taskRunner = useTaskRunnerStore();
  taskRunner.setTask(tasks[taskId]);
};

import { useScienceStore } from "@/stores/ScienceStore";
import { useCoresStore } from "@/stores/CoreStore";
import { useTaskRunnerStore } from "@/stores/TaskRunnerStore";

let tasks = {
  gatherData: {
    id: "gatherData",
    display: "Gathering Data",
    work: 100,
    color: "primary",
    onComplete: () => {
      const science = useScienceStore();
      science.incrementDataBy(5);
    },
  },
  expandCore: {
    id: "expandCore",
    display: "Expanding Core",
    work: 20,
    color: "info",
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

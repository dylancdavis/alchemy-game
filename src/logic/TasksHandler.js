import { useScienceStore } from "@/stores/ScienceStore";
import { useCoresStore } from "@/stores/CoreStore";
import { useTaskRunnerStore } from "@/stores/TaskRunnerStore";

const science = useScienceStore();
const core = useCoresStore();
const taskRunner = useTaskRunnerStore();

let tasks = {
  gatherData: {
    id: "gatherData",
    display: "Gathering Data",
    work: 100,
    color: "primary",
    onComplete: () => {
      science.incrementDataBy(5);
    },
  },
  expandCore: {
    id: "expandCore",
    display: "Expanding Core",
    work: 20,
    color: "info",
    onComplete: () => {
      core.incrementEssenceBy(5);
    },
  },
};

export const changeTaskWork = (taskName, newWorkVal) => {
  tasks[taskName].work = newWorkVal;
};

export const doTask = (taskId) => {
  taskRunner.setTask(tasks[taskId]);
};

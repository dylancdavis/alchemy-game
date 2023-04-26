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
  studyData: {
    id: "studyData",
    display: {
      name: "Studying Data",
      color: "primary",
    },
    work: 20,
    onComplete: () => {
      const science = useScienceStore();
      science.convertDataToKnowledge();
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
  contractCore: {
    id: "contractCore",
    display: {
      name: "Contracting Core",
      color: "warning",
    },
    work: 100,
    onComplete: () => {
      const core = useCoresStore();
      core.contractCore();
    },
  },
  researchManipulation: {
    id: "researchManipulation",
    display: {
      name: "Researching Manipulation Methods",
      color: "primary",
    },
    work: 200,
    onComplete: () => {
      const science = useScienceStore();
      science.unlockManipulation();
    },
  },
  researchQuantification: {
    id: "researchQuantification",
    display: {
      name: "Researching Quantification Methods",
      color: "primary",
    },
    work: 200,
    onComplete: () => {
      const science = useScienceStore();
      science.unlockQuantification();
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

// Create a new store to manage the current task
import { defineStore } from "pinia";
import { ref } from "vue";

export const useResearchStore = defineStore("ResearchStore", () => {
  // State
  const researchables = ref({
    basicResearch: {
      display: {
        name: "Fundamental Research Methods",
        description: "Develop methods to record and analyze data",
      },
      tag: "fundamentals",
      taskId: "researchBasicResearch",
    },
    manipulation: {
      display: {
        name: "Manipulation Methods",
        description: "Investigate basic core manipulation methods.",
      },
      tag: "core theory",
      costs: {
        knowledge: 5,
      },
      taskId: "researchManipulation",
    },
    quantification: {
      display: {
        name: "Quantification Methods",
        description: "Divise a way to quantify essence amounts in cores.",
      },
      tag: "core theory",
      costs: {
        knowledge: 2,
      },
      taskId: "researchQuantification",
    },
  });

  const available = ref(new Set(["basicResearch"]));
  const completed = ref(new Set());

  function getResearch(researchId) {
    const ret = researchables.value[researchId];
    if (!ret) console.error(`Task '${researchId}' not found!`);
    return ret;
  }

  function unlock(researchId) {
    available.value.add(researchId);
  }

  function complete(researchId) {
    // check to make sure research is available
    if (!available.value.has(researchId)) {
      console.error(`Research '${researchId}' not available!`);
      return;
    }
    console.log(`completing ${researchId}`);
    available.value.delete(researchId);
    completed.value.add(researchId);
    console.log("available:", available.value);
    console.log("completed:", completed.value);
  }

  return {
    getResearch,
    unlock,
    complete,
    available,
    completed,
  };
});

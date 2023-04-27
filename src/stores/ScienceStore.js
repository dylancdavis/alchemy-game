// Science store using Pinia setup api
// store should keep track of variables named data and knowledge

import { defineStore } from "pinia";
import { ref } from "vue";

export const useScienceStore = defineStore("ScienceStore", () => {
  const data = ref(0);
  const knowledge = ref(5);

  function incrementDataBy(amt) {
    data.value += amt;
  }

  function studyData() {
    if (data.value >= 1) {
      data.value--;
      knowledge.value++;
    }
  }

  return {
    data,
    knowledge,
    incrementDataBy,
    studyData,
  };
});

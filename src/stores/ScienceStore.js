// Science store using Pinia setup api
// store should keep track of variables named data and knowledge

import { defineStore } from "pinia";
import { ref } from "vue";

export const useScienceStore = defineStore("ScienceStore", () => {
  const data = ref(0);
  const knowledge = ref(5);
  const manipulation = ref(false);

  function incrementDataBy(amt) {
    data.value += amt;
  }
  function convertDataToKnowledge() {
    if (data.value > 0) {
      data.value--;
      knowledge.value++;
    }
  }
  function unlockManipulation() {
    console.log("unlocking manipulation");
    manipulation.value = true;
  }
  return {
    data,
    knowledge,
    incrementDataBy,
    convertDataToKnowledge,
    manipulation,
    unlockManipulation,
  };
});

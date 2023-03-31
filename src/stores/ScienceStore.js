// Science store using Pinia setup api
// store should keep track of variables named data and knowledge

import { defineStore } from "pinia";
import { ref } from "vue";

const useScienceStore = defineStore("ScienceStore", () => {
  const data = ref(0);
  const knowledge = ref(0);
  function incrementData() {
    data.value++;
  }
  function convertDataToKnowledge() {
    if (data.value > 0) {
      data.value--;
      knowledge.value++;
    }
  }
  return { data, knowledge, incrementData, convertDataToKnowledge };
});

const science = useScienceStore();
export default science;

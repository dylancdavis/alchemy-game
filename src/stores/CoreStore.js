// Cores store that keep track of essence and essenceMax

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCoresStore = defineStore("CoreStore", () => {
  const essence = ref(0);
  const essenceMax = ref(10);
  const essenceMaxLimit = 1000;
  const expandAmt = ref(5);

  function expandCore() {
    essence.value += expandAmt.value;
    if (essence.value > essenceMax.value) {
      essence.value = essenceMax.value;
    }
  }

  function contractCore() {
    essenceMax.value += essence.value * 5;
    if (essenceMax.value > essenceMaxLimit) {
      essenceMax.value = essenceMaxLimit;
    }
    essence.value = 0;
  }

  return { essence, essenceMax, expandCore, contractCore };
});

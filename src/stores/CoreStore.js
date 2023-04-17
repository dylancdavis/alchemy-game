// Cores store that keep track of essence and essenceMax

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCoresStore = defineStore("CoreStore", () => {
  const essence = ref(0);
  const essenceMax = ref(10);

  function incrementEssenceBy(amt) {
    essence.value += amt;
    if (essence.value > essenceMax.value) {
      essence.value = essenceMax.value;
    }
  }

  function contractCore() {
    essenceMax.value += essence.value * 5;
    essence.value = 0;
  }

  return { essence, essenceMax, incrementEssenceBy, contractCore };
});

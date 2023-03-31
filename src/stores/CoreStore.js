// Cores store that keep track of essence and essenceMax

import { defineStore } from "pinia";
import { ref } from "vue";

const useCoresStore = defineStore("CoreStore", () => {
  const essence = ref(0);
  const essenceMax = ref(10);

  function incrementEssenceBy(amt) {
    essence.value += amt;
    if (essence.value > essenceMax.value) {
      essence.value = essenceMax.value;
    }
  }

  function incrementEssenceMaxBy(amt) {
    essenceMax.value += amt;
  }

  return { essence, essenceMax, incrementEssenceBy, incrementEssenceMaxBy };
});

export const trueCore = useCoresStore();

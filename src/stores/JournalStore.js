// Keep track of journal entries

import { defineStore } from "pinia";
import { ref } from "vue";

export const useJournalStore = defineStore("JournalStore", () => {
  const entries = ref([]);

  const id = ref(0);

  function addEntry(text) {
    console.log("adding entry: " + text);

    entries.value.push({ id: id.value, text: text });
    id.value++;
  }

  return { entries, addEntry };
});

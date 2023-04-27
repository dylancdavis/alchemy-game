<script setup>
import { useJournalStore } from "@/stores/JournalStore";
import { onMounted } from "vue";

import entries from "../constants/JournalEntries";

const journal = useJournalStore();

onMounted(() => {
  console.log("JournalTab mounted");

  journal.addEntry(entries.firstEntry);
});
</script>

<template>
  <div class="journal-wrapper">
    <v-card v-for="entry in journal.entries" :key="entry.id">
      <h4>Journey Into Essentia</h4>
      <p>
        {{ entry.text }}
      </p>
    </v-card>
  </div>
</template>

<style scoped>
.journal-wrapper {
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: scroll;
}

.v-card {
  padding: 1em;
}

h4 {
  border-bottom: 1px solid grey;
  margin-bottom: 0.5em;
}

p {
  font-size: 16px;
  text-indent: 1.5em;
}
</style>

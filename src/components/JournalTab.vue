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
    <ul>
      <li v-for="entry in journal.entries" :key="entry.id">
        <p>
          {{ entry.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.journal-wrapper {
  padding: 3em;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

p {
  font-size: 16px;
}
</style>

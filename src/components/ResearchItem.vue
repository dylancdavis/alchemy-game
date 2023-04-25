<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps([
  "visible",
  "name",
  "chip",
  "cost",
  "description",
  "disabled",
  "onClick",
]);
</script>

<template>
  <v-expansion-panel v-if="visible">
    <v-expansion-panel-title>
      <div class="research-title">
        <h3>{{ name }}</h3>
        <v-chip>{{ chip }}</v-chip>
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <h5>Cost: {{ cost }} Knowledge</h5>
      <p>basic methods to interact with essence cores</p>
      <v-btn @click="onClick" :disabled="disabled"> Research </v-btn>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
.research-title {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>

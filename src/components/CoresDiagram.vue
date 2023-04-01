<script setup>
import { computed, defineProps } from "vue";
import EssenceCore from "./EssenceCore.vue";
import { useCoresStore } from "../stores/CoreStore";

const core = useCoresStore();

const props = defineProps(["selectCore"]);

const ESSENCE_LIMIT = 1000;
const MAX_DIAMETER = 512;
const CORE_COEFFICIENT = MAX_DIAMETER / 2 / Math.sqrt(ESSENCE_LIMIT / Math.PI);

const outerSize = computed(() => {
  return 2 * Math.sqrt(core.essenceMax / Math.PI) * CORE_COEFFICIENT;
});

const innerSize = computed(() => {
  return Math.floor((core.essence / core.essenceMax) * outerSize.value);
});
</script>

<template>
  <v-sheet id="core-panel" variant="tonal">
    <EssenceCore
      :innerSize="innerSize"
      :outerSize="outerSize"
      :selectCore="props.selectCore"
    />
  </v-sheet>
</template>

<style scoped>
#core-panel {
  display: grid;
  place-items: center;
  background-color: #ddd;
  padding: 64px;
}

.v-sheet {
  flex: 1;
}
</style>

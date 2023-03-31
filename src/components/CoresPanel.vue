<script setup>
import { ref } from "vue";
import CoresDiagram from "./CoresDiagram.vue";

const selectedCore = ref(null);

const selectedTab = ref("cores");

const selectCore = (name) => {
  selectedCore.value = name;
};
</script>

<template>
  <v-sheet class="elevation-4 fill-height panel">
    <div>
      <v-tabs
        :v-model="selectedTab"
        grow
        bg-color="#333"
        slider-color="grey"
        color="white"
      >
        <v-tab value="cores" v-ripple="false">Core</v-tab>
      </v-tabs>
    </div>
    <v-window v-model="selectedTab" class="fill-height">
      <v-window-item value="research" class="fill-height">
        <v-container v-if="selectedCore === null">No Core Selected</v-container>
        <v-container v-if="selectedCore === 'true'">
          <h1>Essence Core</h1>
          <v-btn
            :ripple="false"
            class="gather"
            @click="data++"
            :disabled="disableCollectData"
            >Gather Data</v-btn
          >
          <v-btn :ripple="false" @click="expandCore" :disabled="disableExpand"
            >Expand</v-btn
          >
          <v-btn
            :ripple="false"
            @click="contractCore"
            :disabled="disableContract"
            v-show="showContract"
            >Contract</v-btn
          >
        </v-container>
        <CoresDiagram
          @click="selectedCore = null"
          :outerSize="outerSize"
          :innerSize="innerSize"
          :selectCore="selectCore"
        />
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<style scoped>
.panel {
  display: flex;
  flex-direction: column;
}

.v-window-item {
  display: flex;
  flex-direction: column;
}
</style>

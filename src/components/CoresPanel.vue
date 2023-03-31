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
  <v-sheet class="elevation-4" id="text-panel">
    <v-tabs
      :v-model="selectedTab"
      grow
      bg-color="#333"
      slider-color="grey"
      color="white"
    >
      <v-tab value="cores" v-ripple="false">Core</v-tab>
    </v-tabs>
    <v-window v-model="selectedTab">
      <v-window-item value="research">
        <v-sheet>
          <v-container v-if="selectedCore === null"
            >Select a core...</v-container
          >
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
            class="panel"
            :outerSize="outerSize"
            :innerSize="innerSize"
            :selectCore="selectCore"
          />
        </v-sheet>
      </v-window-item>
    </v-window>
    <v-divider class="border-opacity-75" />
    <TaskInfo />
  </v-sheet>
</template>

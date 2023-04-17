<script setup>
import { defineProps, computed } from "vue";

const props = defineProps(["outerSize", "innerSize", "selectCore"]);

const outerStyle = computed(() => {
  return {
    width: `${props.outerSize}px`,
    height: `${props.outerSize}px`,
  };
});

const innerStyle = computed(() => {
  return {
    width: `${props.innerSize}px`,
    height: `${props.innerSize}px`,
  };
});

const imgStyle = computed(() => {
  return {
    filter: `blur(${props.innerSize / 15}px)`,
  };
});

const onSelect = () => {
  props.selectCore("true");
};
</script>

<template>
  <div id="true-core" :style="outerStyle" @click.stop="onSelect">
    <div id="true-core-inner" :style="innerStyle">
      <img :style="imgStyle" src="../assets/svg/swirl.svg" />
    </div>
  </div>
</template>

<style scoped>
#true-core {
  border-radius: 100%;
  border: 2px solid black;
  background-color: rgb(32, 32, 32);
  transition: all 0.5s ease-in-out, outline 0s;
  overflow: hidden;
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
}

#true-core-inner {
  background-color: aliceblue;
  border-radius: 100%;
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 4px 2px aliceblue;
  display: grid;
  position: absolute;
  overflow: hidden;
}

#true-core.selected {
  outline: 2px solid gold;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

#true-core img {
  animation: rotation 6s infinite linear;
  transition: all 1s ease;
  width: 100%;
  opacity: 0.6;
}
</style>

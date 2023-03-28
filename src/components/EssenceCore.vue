<script setup>
import { defineProps, computed } from 'vue'

	const props = defineProps(['outerSize', 'innerSize'])

	const outerStyle = computed(() => {
		return {
			width: `${props.outerSize}px`,
			height: `${props.outerSize}px`
		}
	})

	const innerStyle = (computed(() => {
		return {
			width: `${props.innerSize}px`,
			height: `${props.innerSize}px`
		}
	}))

</script>

<template>
	<div id="true-core" :style="outerStyle">
		<div id="true-core-inner" :style="innerStyle">
			<img src="../assets/svg/swirl.svg" />
		</div>
	</div>
</template>

<style scoped>

	#true-core {
		border-radius: 100%;
		border: 2px solid black;
		background-color: rgb(32, 32, 32);
		transition: all 0.5s ease-in-out;
		overflow: hidden;
		position: relative;
		display: grid;
		place-items: center;
	}

	#true-core-inner {
		background-color: aliceblue;
		border-radius: 100%;
		transition: all 1s ease;
		box-shadow: 0px 0px 4px 2px aliceblue;
		display: grid;
		position: absolute;
		overflow: hidden;
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
		filter: blur(10px);
}

</style>
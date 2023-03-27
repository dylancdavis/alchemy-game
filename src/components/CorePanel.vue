<script setup>
	import { defineProps, computed } from 'vue'
	const props = defineProps(['essence', 'essenceMax'])

	const outerStyle = (computed(() => {
		return {
		width: `${props.essenceMax*64}px`,
		height: `${props.essenceMax*64}px`
	}
	}))

	const innerStyle = (computed(() => {
		return {
		width: `${props.essence*58}px`,
		height: `${props.essence*58}px`
	}
	}))

</script>

<template>
	<div id="core-panel">
	<div id="true-core" :style="outerStyle">
		<div id="true-core-inner" :style="innerStyle">
		<img src="../assets/svg/swirl.svg" />
	</div>
	</div>
	</div>
</template>

<style scoped>

	#core-panel {
		display: grid;
		place-items: center;
	}

	#true-core {
		border-radius: 100%;
		border: 1px solid black;
		display: grid;
		background-color: rgb(32, 32, 32);
		place-items: center;
		transition-delay: 1s;
		transition: all 0.5ss ease-in-out;
	}

	#true-core-inner {
		background-color: aliceblue;
		border-radius: 100%;
		transition: all 1s ease;
		box-shadow: 0px 0px 4px 2px aliceblue;
	}

</style>
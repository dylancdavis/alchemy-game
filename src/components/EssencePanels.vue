<script setup>
import { ref } from 'vue'
import CorePanel from './CorePanel.vue'

const val = ref(0)
</script>

<template>
	<div id="essence-panels">
		<div id="text-panel" class="panel">some text {{ val }}</div>
		<CorePanel class="panel" />
		<div id="thought-panel" class="panel">thoughts</div>
	</div>
</template>

<style scoped>

	#essence-panels {
		width: 100%;
		height: 100%;
		display: grid;
		grid-gap: 8px;
		background-color: darkgray;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 3fr 1fr;
		padding: 16px;
	}

	.panel {
		border: 2px solid black
	}

	#core-panel {
		grid-row: span 2;
	}

	.panel {
		padding: 16px;
	}
</style>
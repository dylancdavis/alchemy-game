<script setup>

</script>

<template>
	<div id="essence-panels">
		<div id="text-panel" class="panel">some text</div>
		<div id="core-panel" class="panel">cores</div>
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
	}

	.panel {
		padding: 16px;
	}
</style>
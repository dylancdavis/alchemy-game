<script setup>
	console.log('hi!')
</script>

<template>
 <div id="core-panel">
	<div id="true-core"></div>
 </div>
</template>

<style scoped>

	#core-panel {
		display: grid;
		place-items: center;
	}

	#true-core {
		width: 64px;
		height: 64px;
		border-radius: 100%;
		border: 1px solid black;
	}

</style>
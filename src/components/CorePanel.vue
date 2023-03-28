<script setup>
	import { defineProps } from 'vue'
	import EssenceCore from './EssenceCore.vue'
	const props = defineProps(['innerSize', 'outerSize'])
</script>

<template>
	<div id="core-panel">
		<EssenceCore :innerSize="props.innerSize" :outerSize="props.outerSize" />
	</div>
</template>

<style scoped>

	#core-panel {
		display: grid;
		place-items: center;
	}

</style>
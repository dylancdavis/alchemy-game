<script setup>
	import { defineProps } from 'vue'
	import EssenceCore from './EssenceCore.vue'
	const props = defineProps(['innerSize', 'outerSize', 'selectCore'])
</script>

<template>
	<v-card :ripple="false" id="core-panel" variant="tonal">
		<EssenceCore :innerSize="props.innerSize" :outerSize="props.outerSize" :selectCore="props.selectCore" />
	</v-card>
</template>

<style scoped>

	#core-panel {
		display: grid;
		place-items: center;
	}

</style>
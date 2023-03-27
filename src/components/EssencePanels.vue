<script setup>
import { ref } from 'vue'
import CorePanel from './CorePanel.vue'

const essence = ref(0)
const essenceMax = ref(1)
const incrementAmt = ref(0.1)

const incrementEssence = amt => {
	console.log('amt', amt);
	essence.value += amt
	if (essence.value > essenceMax.value) {
		essence.value = essenceMax.value
		incrementAmt.value += essenceMax.value*0.01
	}
}

const incrementEssenceMax = amt => {
	essenceMax.value += amt
}

const expandCore = () => {
	incrementEssence(incrementAmt.value)
}

const contractCore = () => {
	if (essence.value <= 0) return
	const condensedAmt = essence.value
	essence.value = 0
	incrementEssenceMax(condensedAmt*0.1)
}

</script>

<template>
	<div id="essence-panels">
		<div id="text-panel" class="panel">
			Essence: {{ essence }} / {{ essenceMax }}
			<div>
				<button @click="expandCore">Expand</button>
				<button @click="contractCore">Contract</button>
			</div>
			(Increment Rate: {{ incrementAmt }})
		</div>
		<CorePanel class="panel" :essence="essence" :essenceMax="essenceMax" />
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
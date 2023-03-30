<script setup>
import { ref, computed } from 'vue'
import CorePanel from './CorePanel.vue'

const essence = ref(0)
const essenceMax = ref(10)
const incrementAmt = ref(1)
const selectedCore = ref(null)

const ESSENCE_LIMIT = 1000
const MAX_DIAMETER = 512
const CORE_COEFFICIENT = (MAX_DIAMETER/2)/(Math.sqrt(ESSENCE_LIMIT/Math.PI)) 

const outerSize = computed(() => {
		return (2*Math.sqrt(essenceMax.value/Math.PI)*CORE_COEFFICIENT)	
})

const innerSize = computed(() => {
	return Math.floor((essence.value/essenceMax.value) * outerSize.value)
})

const incrementEssence = amt => {
	console.log('amt', amt);
	essence.value += amt
	if (essence.value > essenceMax.value) {
		essence.value = essenceMax.value
		incrementAmt.value += essenceMax.value*0.01
	}
	if (disableContract.value && essence.value >= essenceMax.value*0.5) {
		disableContract.value = false
		if (!showContract.value) showContract.value = true
	}
}

const incrementEssenceMax = amt => {
	essenceMax.value += amt
	if (essenceMax.value > ESSENCE_LIMIT) essenceMax.value = ESSENCE_LIMIT
}

const disableExpand = ref(false)
const disableContract = ref(true)

const showContract = ref(false)

const data = ref(0)

const selectCore = name => {
	selectedCore.value = name
}

const expandCore = () => {
	disableExpand.value = true
	setTimeout(() => {
		disableExpand.value = false
	}, 1000)
	incrementEssence(incrementAmt.value)
}

const contractCore = () => {
	disableContract.value = true
	if (essence.value <= 0) return
	const condensedAmt = essence.value
	essence.value = 0
	incrementEssenceMax(condensedAmt*0.1)
}



</script>

<template>
	<div id="essence-panels">
		<v-card id="text-panel" class="panel">
			<h1>Notebook</h1>
			<v-container>Data: {{ data }}</v-container>
			<v-divider vertical></v-divider>
			<div>
				<div v-if="selectedCore === null">Select a core...</div>
				<div v-if="selectedCore === 'true'">
					<v-divider vertical></v-divider>
					
					<h1>Essence Core</h1>
					<div>Essence: {{ essence }} / {{ essenceMax }}</div>
					
					<v-btn :ripple="false" class="gather" @click="data++" :disabled="disableCollectData">Gather Data</v-btn>
					<v-btn :ripple="false" @click="expandCore" :disabled="disableExpand">Expand</v-btn>
					<v-btn :ripple="false" @click="contractCore" :disabled="disableContract" v-show="showContract">Contract</v-btn>
				<div>(Increment Rate: {{ incrementAmt }})</div>
			</div>
		</div>
		</v-card>
		<CorePanel @click="selectedCore = null" class="panel" :outerSize="outerSize" :innerSize="innerSize" :selectCore="selectCore" />
		<v-card id="thought-panel" class="panel">thoughts</v-card>
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

	#core-panel {
		grid-row: span 2;
	}

	.panel {
		padding: 16px;
	}

</style>
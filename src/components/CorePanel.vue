<script setup>
	import { defineProps, computed } from 'vue'
	const props = defineProps(['essence', 'essenceMax'])

	const MAX_DIAMETER = 512
	const ESSENCE_LIMIT = 1000
	const CORE_COEFFICIENT = (MAX_DIAMETER/2)/(Math.sqrt(ESSENCE_LIMIT/Math.PI)) 

	const outerSize = computed(() => {
		return (2*Math.sqrt(props.essenceMax/Math.PI)*CORE_COEFFICIENT)
	})

	const outerStyle = computed(() => {
		return {
			width: `${outerSize.value}px`,
			height: `${outerSize.value}px`
		}
	})

	const innerStyle = (computed(() => {
		const size = 10

		return {
			width: `${size}px`,
			height: `${size}px`
		}
	}))

	const swirlStyle = (computed(() => {
		const blurAmount = 4
		return {
			filter: `blur(${blurAmount}px)`
		}
	}))

</script>

<template>
	<div id="core-panel">
		<div id="true-core" :style="outerStyle">
			<div id="true-core-inner" :style="innerStyle">
				<img src="../assets/svg/swirl.svg" :style="swirlStyle" />
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
		transition: all 0.5s ease-in-out;
	}

	#true-core-inner {
		background-color: aliceblue;
		border-radius: 100%;
		transition: all 1s ease;
		box-shadow: 0px 0px 4px 2px aliceblue;
		display: grid;
		place-items: center;
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
		width: 90%;
		opacity: 0.6
}

</style>
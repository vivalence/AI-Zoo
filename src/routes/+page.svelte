<script>
	import Chart from '$lib/components/Chart/Chart.svelte';
	import PriceCalculator from '$lib/components/PriceCalculator/PriceCalculator.svelte';
</script>

<main class="flex-grow container mx-auto">
	<div class="flex justify-center mt-12">
		<PriceCalculator />
		<Chart />
	</div>
</main>

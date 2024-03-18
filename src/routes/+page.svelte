<script>
	import Chart from '$lib/components/Chart.svelte';
	import Datatable from '$lib/components/Datatable/Datatable.svelte';
	import PriceCalculator from '$lib/components/PriceCalculator.svelte';
</script>

<main class="flex-grow container mx-auto">
	<div class="flex flex-col items-center mt-8">
		<h1 class="h1">Dataset Calculator</h1>
		<p class="h4 mt-4">Calculate the cost of using different datasets</p>
	</div>

	<div class="flex justify-center mt-12 mb-12 gap-x-8">
		<div class="w-full">
			<PriceCalculator />
		</div>

		<Chart />
	</div>

	<div class="mb-12">
		<Datatable />
	</div>
</main>

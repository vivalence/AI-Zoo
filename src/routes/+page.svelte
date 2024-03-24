<script>
	import Chart from '$lib/components/Chart.svelte';
	import PriceCalculator from '$lib/components/PriceCalculator.svelte';
	import DataTable from '$lib/components/Datatable/data-table.svelte';
</script>

<main class="flex-grow container mx-auto">
	<div class="flex flex-col items-center mt-8">
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			Dataset Calculator
		</h1>
		<p class="leading-7 [&:not(:first-child)]:mt-6">
			A straightforward and contributor-driven platform for comparison of AI models and their
			suppliers.
		</p>
	</div>

	<div class="flex flex-col md:flex-row justify-center mt-12 mb-12 gap-x-8">
		<div class="w-full md:w-1/2">
			<PriceCalculator />
		</div>

		<div class="w-full md:w-1/2">
			<Chart />
		</div>
	</div>

	<div class="mb-12">
		<DataTable />
	</div>
</main>

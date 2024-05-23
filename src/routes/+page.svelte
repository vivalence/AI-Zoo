<script>
	import Chart from './home/components/Chart/Chart.svelte';
	import PriceCalculator from './home/components/PriceCalculator.svelte';
	import DataTable from './home/components/Datatable/data-table.svelte';

</script>

<svelte:head>
	<title>AI Zoo: Suppliers and Pricing</title>
	<meta name="description" content="" />
</svelte:head>

<main class="flex-grow container mx-auto pt-10">
	<div class="flex flex-col items-center mb-16">
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">🦓 AI Zoo 🦚</h1>
		<p class="leading-7 [&:not(:first-child)]:mt-6">
			A straightforward and contributor-driven platform for comparison of AI models and their
			suppliers.
		</p>
	</div>


	<div class="w-full">
		<h1 class="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">Suppliers and Pricing:</h1>
	</div>
	<div class="flex flex-col md:flex-row justify-center items-center mb-12 gap-x-8">
		<div class="w-full md:w-1/2">
			<PriceCalculator/>
		</div>

		<div class="w-full md:w-1/2">
			<Chart />
		</div>
	</div>

	<div class="mb-12">
		<DataTable />
	</div>
</main>

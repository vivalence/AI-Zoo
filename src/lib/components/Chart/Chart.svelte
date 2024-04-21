<script lang="ts">
	import Chart from 'chart.js/auto';
	import { Bar, Scatter } from 'svelte-chartjs';
	import { selectedIds } from '$lib/stores/selectedIds';
	import { optionsBar, optionsScatter } from './chartOptions';

	import { dummy } from '$data/suppliers/Dummy/dummy';

	let activeChart = 'bar';
	let chartTypes = ['bar', 'scatter'];

	let dataBar = {
		labels: [] as any[],
		datasets: [] as any[]
	};
	let dataScatter = {
		datasets: [] as any[]
	};

	selectedIds.subscribe((value) => {
		const selectedIds = value;
		const filteredData = dummy.filter((model) => selectedIds.includes(model.id));

		const dataToSort = filteredData.length === 0 ? dummy : filteredData;

		const sortedData = [...dataToSort].sort(
			(a, b) =>
				parseFloat(a.cost.per_million_tokens_blend_3_1) -
				parseFloat(b.cost.per_million_tokens_blend_3_1)
		);
		const labels = sortedData.map((model) => model.model);
		const dataDummy = sortedData.map((model) =>
			parseFloat(model.cost.per_million_tokens_blend_3_1)
		);

		dataBar = {
			labels: labels,
			datasets: [
				{
					axis: 'y' as const,
					data: dataDummy,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(255, 159, 64, 0.2)',
						'rgba(255, 205, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(201, 203, 207, 0.2)'
					],
					borderColor: [
						'rgb(255, 99, 132)',
						'rgb(255, 159, 64)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)',
						'rgb(54, 162, 235)',
						'rgb(153, 102, 255)',
						'rgb(201, 203, 207)'
					],
					borderWidth: 2
				}
			]
		};

		dataScatter = {
			datasets: sortedData.map((model) => ({
				label: model.model,
				data: [
					{
						x: parseFloat(model.speed.tokens_per_second),
						y: parseFloat(model.cost.per_million_tokens_blend_3_1)
					}
				],
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				borderWidth: 2
			}))
		};
	});

	function toggleChart(chartType: string) {
		activeChart = chartType;
	}
</script>

<div>
	<div class="card p-3 pt-8 h-[400px] flex flex-col gap-y-4">
		<div>
			{#each chartTypes as chartType}
				<button
					on:click={() => toggleChart(chartType)}
					class:bg-blue-500={activeChart === chartType}
					class:text-white={activeChart === chartType}
					class="px-4 py-1 rounded"
				>
					{#if chartType === 'bar'}
						Price per Token
					{:else}
					  Price * Tokens per Second
					{/if}
				</button>
			{/each}
		</div>
		{#if activeChart === 'bar'}
			<Bar data={dataBar} options={optionsBar} width={900} height={100} />
		{:else if activeChart === 'scatter'}
			<Scatter data={dataScatter} options={optionsScatter} width={900} height={100} />
		{/if}
	</div>
</div>

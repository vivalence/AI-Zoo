<script lang="ts">
	import Chart from 'chart.js/auto';
	import type { ChartData, ChartDataset } from 'chart.js';
	import { Bar, Scatter } from 'svelte-chartjs';
	import { optionsBar, optionsScatter } from './chartOptions';
	import { suppliers, selectedModels } from '../../store';

	let activeChart: 'bar' | 'scatter' = 'bar';
	let chartTypes: ('bar' | 'scatter')[] = ['bar', 'scatter'];

	let dataBar: ChartData<'bar'> = {
    labels: [] as string[],
    datasets: [] as ChartDataset<'bar'>[]
  };

  let dataScatter: ChartData<'scatter'> = {
    datasets: [] as ChartDataset<'scatter'>[]
  };

	selectedModels.subscribe((value) => {
		const selectedIds = value;
		const filteredData = $suppliers.filter((model) => selectedIds.includes(model.id));

		const dataToSort = filteredData.length === 0 ? $suppliers : filteredData;

		const sortedData = [...dataToSort].sort(
			(a, b) =>
				a.cost.per_million_tokens_blend_3_1 -
				b.cost.per_million_tokens_blend_3_1
		);
		const labels = sortedData.map((model) => model.name);
		const dataDummy = sortedData.map((model) =>
			model.cost.per_million_tokens_blend_3_1
		);

		dataBar = {
			labels: labels,
			datasets: [
				{
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
				label: model.name,
				data: [
					{
						x: model.speed.tokens_per_second,
						y: model.cost.per_million_tokens_blend_3_1
					}
				],
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				borderWidth: 2
			}))
		};
	});

	function toggleChart(chartType: 'bar' | 'scatter') {
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

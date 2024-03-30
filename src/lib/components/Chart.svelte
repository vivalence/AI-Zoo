<script lang="ts">
	import Chart from 'chart.js/auto';
	import { Bar, Scatter } from 'svelte-chartjs';
	import { dummy } from '../../../data/suppliers/Dummy/dummy';

	let activeChart = 'bar';
	let chartTypes = ['bar', 'scatter'];

	dummy.sort((a, b) => a.cost.per_million_tokens_blend_3_1 - b.cost.per_million_tokens_blend_3_1);
	const labels = dummy.map((model) => model.model);
	const dataDummy = dummy.map((model) => model.cost.per_million_tokens_blend_3_1);

	const data = {
		labels: labels,
		datasets: [
			{
				axis: 'y',
				label: 'Blended Price',
				data: dataDummy,
				fill: true,
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

	const options = {
		maintainAspectRatio: false,
		indexAxis: 'x' as const,
		plugins: {
			legend: {
				labels: {
					color: '#fff'
				}
			}
		},
		scales: {
			x: {
				grid: {
					color: 'rgba(255, 255, 255, 0.1)'
				},
				ticks: {
					color: '#fff'
				}
			},
			y: {
				grid: {
					color: 'rgba(255, 255, 255, 0.1)'
				},
				ticks: {
					color: '#fff'
				}
			}
		}
	};

	function toggleChart(chartType: string) {
		activeChart = chartType;
	}
</script>

<div class="relative">
	<div>
		{#each chartTypes as chartType}
			<button
				on:click={() => toggleChart(chartType)}
				class:bg-blue-500={activeChart === chartType}
				class:text-white={activeChart === chartType}
				class="px-4 py-1 rounded"
			>
				{#if chartType === 'bar'}
					Bar Chart
				{:else}
					Scatter Chart
				{/if}
			</button>
		{/each}
	</div>

	<div class="card p-3 pt-8 h-[400px] flex flex-col">
		{#if activeChart === 'bar'}
			<Bar {data} {options} width={900} height={100} />
		{:else if activeChart === 'scatter'}
			<Scatter {data} {options} width={900} height={100} />
		{/if}
	</div>
</div>

<script lang="ts">
	import Chart from 'chart.js/auto';
	import { Bar, Scatter } from 'svelte-chartjs';
	import { dataBar, optionsBar, dataScatter, optionsScatter } from './chartConfig';
	import * as Card from '$lib/components/ui/card';

	let activeChart = 'bar';
	let chartTypes = ['bar', 'scatter'];

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
						Bar Chart
					{:else}
						Scatter Chart
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

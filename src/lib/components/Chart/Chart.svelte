<script lang="ts">
	import Chart from 'chart.js/auto';
	import { Bar, Scatter } from 'svelte-chartjs';

	let activeChart = 'bar';

	const labels = [
		'Dataset 1',
		'Dataset 2',
		'Dataset 3',
		'Dataset 4',
		'Dataset 5',
		'Dataset 6',
		'Dataset 7'
	];
	const data = {
		labels: labels,
		datasets: [
			{
				axis: 'y',
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
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
		indexAxis: 'y',
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
	<div class="absolute top-4 left-5">
		<button
			on:click={() => toggleChart('bar')}
			class:bg-blue-500={activeChart === 'bar'}
			class:text-white={activeChart === 'bar'}
			class="px-4 py-1 rounded">Bar Chart</button
		>
		<button
			on:click={() => toggleChart('scatter')}
			class:bg-blue-500={activeChart === 'scatter'}
			class:text-white={activeChart === 'scatter'}
			class="px-4 py-1 rounded">Scatter Chart</button
		>
	</div>

	<div class="card p-3 pt-8 h-[400px] flex flex-col">
		{#if activeChart === 'bar'}
			<Bar {data} {options} width={900} height={100} />
		{:else if activeChart === 'scatter'}
			<Scatter {data} {options} width={900} height={100} />
		{/if}
	</div>
</div>

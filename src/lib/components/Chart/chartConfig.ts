import { dummy } from '../../../../data/suppliers/Dummy/dummy';

// Process data
const sortedDummy = [...dummy].sort(
	(a, b) =>
		parseFloat(a.cost.per_million_tokens_blend_3_1) -
		parseFloat(b.cost.per_million_tokens_blend_3_1)
);
const labels = sortedDummy.map((model) => model.model);
const dataDummy = sortedDummy.map((model) => parseFloat(model.cost.per_million_tokens_blend_3_1));

// Bar Chart Config
export const dataBar = {
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

export const optionsBar = {
	maintainAspectRatio: false,
	indexAxis: 'x' as const,
	plugins: {
		legend: {
			display: false
		}
	},
	scales: {
		x: {
			title: {
				display: true,
				text: 'Models sorted by Price'
			},
			grid: {
				color: 'rgba(255, 255, 255, 0.1)'
			},
			ticks: {
				color: '#fff'
			}
		},
		y: {
			title: {
				display: true,
				text: 'Blended price of input & output token prices'
			},
			grid: {
				color: 'rgba(255, 255, 255, 0.1)'
			},
			ticks: {
				color: '#fff'
			}
		}
	}
};

// Scatter Plot Chart
export const dataScatter = {
	datasets: sortedDummy.map((model) => ({
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

export const optionsScatter = {
	maintainAspectRatio: false,
	scales: {
		x: {
			title: {
				display: true,
				text: 'Speed: Tokens per Second'
			},
			grid: {
				color: 'rgba(255, 255, 255, 0.1)'
			}
		},
		y: {
			title: {
				display: true,
				text: 'Blended Price: per million tokens'
			},
			grid: {
				color: 'rgba(255, 255, 255, 0.1)'
			}
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

export const optionsBar = {
	maintainAspectRatio: false,
	indexAxis: 'x' as const,
	axis: 'y' as const,

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

const model = {
	id: 'Model_1',
	model: 'Model_1',
	source: 'https://URL',
	cost: {
		currency: 'USD',
		per_million_tokens_input: 3.0,
		per_million_tokens_output: 15.0
	},
	speed: {
		tokens_per_second: 10.0,
		latency_first_token_ms: 50.0
	},
	technical: {
		token_window: 4048
	},
	quality: {
		some_metric: 0.9
	}
};

model.cost['per_million_tokens_blend_3_1'] =
	model.cost['per_million_tokens_input'] * 3 + model.cost['per_million_tokens_output'] / 4;

export default async () => model;

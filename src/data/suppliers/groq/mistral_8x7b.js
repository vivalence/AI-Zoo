const mixtral8x7B = {
	id: 'mixtral-8x7b-32768',
	name: 'Mixtral 8x7B',
	modelCard: 'https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1',
	supplier: {
		id: 'groq',
		docs: 'https://console.groq.com/docs/models'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.27,
		per_million_tokens_output: 0.27
	},
	speed: {
		tokens_per_second: 471.6,
		latency_first_token_ms: 310
	},
	technical: {
		token_window: 32768
	}
};

mixtral8x7B.cost['per_million_tokens_blend_3_1'] =
	(mixtral8x7B.cost['per_million_tokens_input'] * 3 +
		mixtral8x7B.cost['per_million_tokens_output']) /
	4;

export default () => mixtral8x7B;

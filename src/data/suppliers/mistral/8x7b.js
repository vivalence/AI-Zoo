const mistral8x7B = {
	id: 'mistral_8x7b',
	name: 'Mistral 8x7B',
	modelCard: 'https://huggingface.co/mistralai/Mixtral-8x7B-v0.1',
	supplier: {
		id: 'mistral',
		docs: 'https://docs.mistral.ai/api/'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.7,
		per_million_tokens_output: 0.7
	},
	speed: {
		tokens_per_second: 45.3,
		latency_first_token_ms: 250
	},
	technical: {
		token_window: 32000
	}
};

mistral8x7B.cost['per_million_tokens_blend_3_1'] =
	(mistral8x7B.cost['per_million_tokens_input'] * 3 +
		mistral8x7B.cost['per_million_tokens_output']) /
	4;

export default async () => mistral8x7B;

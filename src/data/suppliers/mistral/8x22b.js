const mistral8x22B = {
	id: 'mistral_8x22b',
	name: 'Mistral 8x22B',
	modelCard: 'https://huggingface.co/mistralai/Mixtral-8x22B-v0.1',
	supplier: {
		id: 'mistral',
		docs: 'https://docs.mistral.ai/api/'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 2.0,
		per_million_tokens_output: 6.0
	},
	speed: {
		tokens_per_second: 77.2,
		latency_first_token_ms: 220
	},
	technical: {
		token_window: 64000
	}
};

mistral8x22B.cost['per_million_tokens_blend_3_1'] =
	(mistral8x22B.cost['per_million_tokens_input'] * 3 +
		mistral8x22B.cost['per_million_tokens_output']) /
	4;

export default async () => mistral8x22B;

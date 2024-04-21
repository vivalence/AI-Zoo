const mistral8x7B_perplexity = {
	id: 'mistral_8x7b_perplexity',
	name: 'Mistral 8x7B',
	supplier: {
		id: 'perplexity',
		docs: 'https://docs.perplexity.ai/'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.6,
		per_million_tokens_output: 0.6
	},
	speed: {
		tokens_per_second: 120.1,
		latency_first_token_ms: 220
	},
	technical: {
		token_window: 32000
	}
};

mistral8x7B_perplexity.cost['per_million_tokens_blend_3_1'] =
	(mistral8x7B_perplexity.cost['per_million_tokens_input'] * 3 +
		mistral8x7B_perplexity.cost['per_million_tokens_output']) /
	4;

export default async () => mistral8x7B_perplexity;

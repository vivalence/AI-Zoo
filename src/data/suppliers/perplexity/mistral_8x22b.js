const mistral8x22B_perplexity = {
	id: 'mistral_8x22b_perplexity',
	name: 'Mistral 8x22B',
	supplier: {
		id: 'perplexity'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 1.0,
		per_million_tokens_output: 1.0,
		per_million_tokens_blend_3_1: 0
	},
	speed: {
		tokens_per_second: 62.3,
		latency_first_token_ms: 230
	},
	technical: {
		token_window: 64000
	}
};

mistral8x22B_perplexity.cost['per_million_tokens_blend_3_1'] =
	(mistral8x22B_perplexity.cost['per_million_tokens_input'] * 3 +
		mistral8x22B_perplexity.cost['per_million_tokens_output']) /
	4;

	export default async () => mistral8x22B_perplexity;

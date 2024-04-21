const llama3_8B_perplexity = {
	id: 'llama3-8b-8192-perplexity',
	name: 'LLaMA 3 (8B)',
	supplier: {
		id: 'perplexity'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.2,
		per_million_tokens_output: 0.2
	},
	speed: {
		tokens_per_second: 121.6,
		latency_first_token_ms: 190
	},
	technical: {
		token_window: 8000
	}
};

llama3_8B_perplexity.cost['per_million_tokens_blend_3_1'] =
	(llama3_8B_perplexity.cost['per_million_tokens_input'] * 3 +
		llama3_8B_perplexity.cost['per_million_tokens_output']) /
	4;

export default async () => llama3_8B_perplexity;

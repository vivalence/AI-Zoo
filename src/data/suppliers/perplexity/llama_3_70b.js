const llama3_70B_perplexity = {
	id: 'llama3-70b-8192-perplexity',
	name: 'LLaMA 3 (70B)',
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
		tokens_per_second: 42.5,
		latency_first_token_ms: 270
	},
	technical: {
		token_window: 8000
	}
};

llama3_70B_perplexity.cost['per_million_tokens_blend_3_1'] =
	(llama3_70B_perplexity.cost['per_million_tokens_input'] * 3 +
		llama3_70B_perplexity.cost['per_million_tokens_output']) /
	4;

	export default async ()  => llama3_70B_perplexity;

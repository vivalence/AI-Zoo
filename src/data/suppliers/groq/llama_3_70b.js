const llama3_70B = {
	id: 'llama3-70b-8192',
	name: 'LLaMA 3 (70B)',
	modelCard: 'https://huggingface.co/meta-llama/Meta-Llama-3-70B',
	supplier: {
		id: 'groq',
		docs: 'https://console.groq.com/docs/models'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.59,
		per_million_tokens_output: 0.79,
		per_million_tokens_blend_3_1: 0
	},
	speed: {
		tokens_per_second: 274.7,
		latency_first_token_ms: 290
	},
	technical: {
		token_window: 8192
	}
};

llama3_70B.cost['per_million_tokens_blend_3_1'] =
	(llama3_70B.cost['per_million_tokens_input'] * 3 + llama3_70B.cost['per_million_tokens_output']) /
	4;

	export default async () => llama3_70B;

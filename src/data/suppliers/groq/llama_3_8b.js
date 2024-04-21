const llama3_8B = {
	id: 'llama3-8b-8192',
	name: 'LLaMA 3 (8B)',
	modelCard: 'https://huggingface.co/meta-llama/Meta-Llama-3-8B',
	supplier: {
		id: 'groq',
		docs: 'https://console.groq.com/docs/models'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.05,
		per_million_tokens_output: 0.1
	},
	speed: {
		tokens_per_second: 867.2,
		latency_first_token_ms: 300
	},
	technical: {
		token_window: 8192
	}
};

llama3_8B.cost['per_million_tokens_blend_3_1'] =
	(llama3_8B.cost['per_million_tokens_input'] * 3 + llama3_8B.cost['per_million_tokens_output']) /
	4;

export default async () => llama3_8B;

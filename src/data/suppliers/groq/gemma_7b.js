const gemma7B = {
	id: 'gemma-7b',
	name: 'Gemma 7B',
	modelCard: 'https://huggingface.co/google/gemma-1.1-7b-it',
	supplier: {
		id: 'groq',
		docs: 'https://console.groq.com/docs/models'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.1,
		per_million_tokens_output: 0.1
	},
	speed: {
		tokens_per_second: 825.4,
		latency_first_token_ms: 330
	},
	technical: {
		token_window: 8192
	}
};

gemma7B.cost['per_million_tokens_blend_3_1'] =
	(gemma7B.cost['per_million_tokens_input'] * 3 + gemma7B.cost['per_million_tokens_output']) / 4;

export default async () => gemma7B;

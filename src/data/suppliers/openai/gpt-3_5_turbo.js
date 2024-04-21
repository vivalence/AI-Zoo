const gpt35Turbo = {
	id: 'gpt-3.5_turbo',
	name: 'GPT-3.5 Turbo',
	supplier: {
		id: 'openai',
		docs: 'https://platform.openai.com/docs/models'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.5,
		per_million_tokens_output: 1.5
	},
	speed: {
		tokens_per_second: 71.4,
		latency_first_token_ms: 380
	},
	technical: {
		token_window: 16000
	}
};

gpt35Turbo.cost['per_million_tokens_blend_3_1'] =
	(gpt35Turbo.cost['per_million_tokens_input'] * 3 + gpt35Turbo.cost['per_million_tokens_output']) /
	4;

export default async () => gpt35Turbo;

const gpt4Turbo = {
	id: 'gpt-4_turbo',
	name: 'GPT-4 Turbo',
	supplier: {
		id: 'openai',
		docs: 'https://platform.openai.com/docs/models'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 10.0,
		per_million_tokens_output: 30.0
	},
	speed: {
		tokens_per_second: 24.4,
		latency_first_token_ms: 630
	},
	technical: {
		token_window: 128000
	}
};

gpt4Turbo.cost['per_million_tokens_blend_3_1'] =
	(gpt4Turbo.cost['per_million_tokens_input'] * 3 + gpt4Turbo.cost['per_million_tokens_output']) /
	4;

export default async () => gpt4Turbo;

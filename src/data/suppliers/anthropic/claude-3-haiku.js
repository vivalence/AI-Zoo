const claude3Haiku = {
	id: 'claude-3-haiku-20240307',
	name: 'Claude 3 Haiku',
	modelCard:
		'https://www-cdn.anthropic.com/de8ba9b01c9ab7cbabf5c33b80b7bbc618857627/Model_Card_Claude_3.pdf',
	supplier: {
		id: 'anthropic',
		docs: 'https://docs.anthropic.com/'
	},
	meta: {
		active: true
	},
	cost: {
		currency: 'USD',
		per_million_tokens_input: 0.25,
		per_million_tokens_output: 1.25
	},
	speed: {
		tokens_per_second: 89.1,
		latency_first_token_ms: 340
	},
	technical: {
		token_window: 200000
	}
};

claude3Haiku.cost['per_million_tokens_blend_3_1'] =
	(claude3Haiku.cost['per_million_tokens_input'] * 3 +
		claude3Haiku.cost['per_million_tokens_output']) /
	4;

export default async () => claude3Haiku;

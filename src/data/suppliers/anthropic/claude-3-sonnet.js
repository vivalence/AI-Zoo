const claude3Sonnet = {
	id: 'claude-3-sonnet-20240229',
	name: 'Claude 3 Sonnet',
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
		per_million_tokens_input: 3.0,
		per_million_tokens_output: 15.0,
		per_million_tokens_blend_3_1: 0
	},
	speed: {
		tokens_per_second: 58.8,
		latency_first_token_ms: 420
	},
	technical: {
		token_window: 200000
	}
};

claude3Sonnet.cost['per_million_tokens_blend_3_1'] =
	(claude3Sonnet.cost['per_million_tokens_input'] * 3 +
		claude3Sonnet.cost['per_million_tokens_output']) /
	4;

export default async () => claude3Sonnet;

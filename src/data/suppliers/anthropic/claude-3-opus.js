const claude3Opus = {
	id: 'claude-3-opus-20240229',
	name: 'Claude 3 Opus',
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
		per_million_tokens_input: 15.0,
		per_million_tokens_output: 75.0
	},
	speed: {
		tokens_per_second: 26.6,
		latency_first_token_ms: 1390
	},
	technical: {
		token_window: 200000
	}
};

claude3Opus.cost['per_million_tokens_blend_3_1'] =
	(claude3Opus.cost['per_million_tokens_input'] * 3 +
		claude3Opus.cost['per_million_tokens_output']) /
	4;

export default async () => claude3Opus;

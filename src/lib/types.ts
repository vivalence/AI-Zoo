export interface Supplier {
	id: string;
	name: string;
	modelCard?: string;
	supplier: {
					id: string;
					docs?: string;
	};
	meta: {
					active: boolean;
	};
	cost: {
					currency: string;
					per_million_tokens_input: number;
					per_million_tokens_output: number;
					per_million_tokens_blend_3_1: number;
	};
	speed: {
					tokens_per_second: number;
					latency_first_token_ms: number;
	};
	technical: {
					token_window: number;
	};
}
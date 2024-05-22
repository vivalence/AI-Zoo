// anthropic
import claude3Sonnet from '$data/suppliers/anthropic/claude-3-sonnet';
import claude3Opus from '$data/suppliers/anthropic/claude-3-opus';
import claude3Haiku from '$data/suppliers/anthropic/claude-3-haiku';

// groq
import gemma7B from '$data/suppliers/groq/gemma_7b';
import llama3_8B from '$data/suppliers/groq/llama_3_8b';
import llama3_70B from '$data/suppliers/groq/llama_3_70b';
import mixtral8x7B from '$data/suppliers/groq/mistral_8x7b';

// mistral
import mistral8x7B from '$data/suppliers/mistral/8x7b';
import mistral8x22B from '$data/suppliers/mistral/8x22b';

// openai
import gpt35Turbo from '$data/suppliers/openai/gpt-3_5_turbo';
import gpt4Turbo from '$data/suppliers/openai/gpt-4_turbo';

// perplexity
import llama3_8B_perplexity from '$data/suppliers/perplexity/llama_3_8b';
import llama3_70B_perplexity from '$data/suppliers/perplexity/llama_3_70b';
import mistral8x7B_perplexity from '$data/suppliers/perplexity/mistral_8x7b';
import mistral8x22B_perplexity from '$data/suppliers/perplexity/mistral_8x22b';

import type { Supplier } from '$lib/types';

const loadSuppliers = async (): Promise<Supplier[]> => {
	const allSuppliersPromises = [
					claude3Sonnet(),
					claude3Opus(),
					claude3Haiku(),
					gemma7B(),
					llama3_8B(),
					llama3_70B(),
					mixtral8x7B(),
					llama3_8B_perplexity(),
					llama3_70B_perplexity(),
					mistral8x7B(),
					mistral8x22B(),
					mistral8x7B_perplexity(),
					mistral8x22B_perplexity(),
					gpt35Turbo(),
					gpt4Turbo()
	];

	const allSuppliers = await Promise.all(allSuppliersPromises);

	return allSuppliers;
};

export default loadSuppliers;
import { writable } from 'svelte/store';
import type { Supplier } from '$lib/types';

type SelectedModels = (string | undefined)[];

export const suppliers = writable<Supplier[]>([]);
export const selectedModels = writable<SelectedModels>([]);
export const activeModel = writable<Supplier>({
    id: '',
    name: '',
    modelCard: '',
    supplier: {
        id: '',
        docs: ''
    },
    meta: {
        active: false
    },
    cost: {
        currency: '',
        per_million_tokens_input: 0,
        per_million_tokens_output: 0,
        per_million_tokens_blend_3_1: 0
    },
    speed: {
        tokens_per_second: 0,
        latency_first_token_ms: 0
    },
    technical: {
        token_window: 0
    }
});

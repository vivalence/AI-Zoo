import { writable } from 'svelte/store';

const initialState = {
 costInput: 0,
 costOutput: 0,
};

export const calculatorStore = writable(initialState);
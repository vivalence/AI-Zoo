<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { activeModel } from '../store';
	import type { Supplier } from '$lib/types';


	interface CalculatorState {
					costInput: number;
					costOutput: number;
	}

	let price: number = 0;
	let model: Supplier;
	let inputTokens: number;
	let outputTokens: number;
	let calculatorState: CalculatorState;

	$: {
					model = $activeModel;
					if ($activeModel && Object.values($activeModel).length > 0) {
									calculatorState = {
													costInput: Number($activeModel.cost.per_million_tokens_input) / 1000000,
													costOutput: Number($activeModel.cost.per_million_tokens_input) / 1000000
									};
					}
	}

	const calculateTotalCost = (): void => {
					if (!model) return;

					const totalInputCost = inputTokens * calculatorState.costInput;
					const totalOutputCost = outputTokens * calculatorState.costOutput;
					price = totalInputCost + totalOutputCost;
	}
</script>

<Card.Root class="w-[400px] py-2">
	<Card.Header>
		<Card.Title>Cost Calculator:</Card.Title>
		{#if model.name}
			Model: {model.name}
		{:else}
			<span class="text-xs text-gray-500 italic">Select a Model below</span>
		{/if}
	</Card.Header>
	<Card.Content class="">
		<form>
			<div class="flex flex-col gap-y-5">
				<div class="flex flex-col gap-y-3">
					<Label for="input-tokens">Input Tokens:</Label>
					<Input type="number" id="input-tokens" bind:value={inputTokens} placeholder="Number of Input Tokens" disabled={!model.name} />
				</div>
				<div class="flex flex-col gap-y-3">
					<Label for="output-tokens">Output Tokens:</Label>
					<Input type="number" id="output-tokens" bind:value={outputTokens} placeholder="Number of Output Tokens" disabled={!model.name} />
				</div>
				<div>
					<Button disabled={!model} on:click={calculateTotalCost}>Calculate Price</Button>
				</div>
			</div>
			{#if price}
			<div>
				<p>Cost Input: ${calculatorState.costInput * inputTokens}</p>
				<p>Cost Output: ${calculatorState.costOutput * outputTokens}</p>
				<p>Total Cost: ${price}</p>
			</div>
			{/if}
		</form>
	</Card.Content>
</Card.Root>
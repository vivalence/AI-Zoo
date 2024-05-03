<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { selectedRow } from '$lib/stores/datatable';
	import { calculatorStore } from '$lib/stores/calculator';

	let price = 0;
	let model = null;
	let inputTokens 
	let outputTokens
	let calculatorState;

	selectedRow.subscribe(value => {
		if (!Object.values(value).length > 0) return;
		model = value;
		calculatorState = {
			costInput: value.cost.per_million_tokens_input / 1000000,
			costOutput: value.cost.per_million_tokens_output / 1000000
		};
	});

	const calculateTotalCost = () => {
		const totalInputCost = inputTokens * calculatorState.costInput;
		const totalOutputCost = outputTokens * calculatorState.costOutput;
		price = totalInputCost + totalOutputCost;
	}
</script>

<Card.Root class="w-[400px] py-2">
	<Card.Header class="">
		<Card.Title>Cost Calculator:</Card.Title>
		{#if model}
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
					<Input type="number" id="input-tokens" bind:value={inputTokens} placeholder="Number of Input Tokens" disabled={!model} />
				</div>
				<div class="flex flex-col gap-y-3">
					<Label for="output-tokens">Output Tokens:</Label>
					<Input type="number" id="output-tokens" bind:value={outputTokens} placeholder="Number of Output Tokens" disabled={!model} />
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
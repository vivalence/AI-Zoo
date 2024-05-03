<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { selectedRow } from '$lib/stores/datatable';

	let model = null;

	let price = 0;

	$: {
		selectedRow.subscribe((value) => {
			if (!value) return;
			model = value;
		});
	}
</script>

<Card.Root class="w-[400px] py-2">
	<Card.Header class="">
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
					<Label for="email-2">Input Tokens:</Label>
					<Input type="email" id="email-2" placeholder="Number of Input Tokens" />
				</div>
				<div class="flex flex-col gap-y-3">
					<Label for="email-2">Output Tokens:</Label>
					<Input type="email" id="email-2" placeholder="Number of Output Tokens" />
				</div>
				<div>
					<Button disabled={!model}>Calculate Price</Button>
				</div>
			</div>
		</form>
	</Card.Content>
</Card.Root>

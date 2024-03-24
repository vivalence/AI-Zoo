<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';

	let input1 = '';
	let input2 = '';
	let price = 0;
</script>

<div class="card p-6 w-[500px] flex flex-col">
	<div class="flex flex-col gap-y-5">
		<div class="flex flex-col gap-y-3">
			<Label for="email-2">Lorem Ipsum</Label>
			<Input type="email" id="email-2" placeholder="Lorem Ipsum" />
		</div>
		<div class="flex flex-col gap-y-3">
			<Label for="email-2">Lorem Ipsum</Label>
			<Input type="email" id="email-2" placeholder="Lorem Ipsum" />
		</div>
		<div>
			<Button>Calculate Price</Button>
		</div>
	</div>
	<div class="mt-12 text-xl bg-gray-200 rounded p-2">
		<p class="font-display text-black">&euro; {price}</p>
	</div>
</div>

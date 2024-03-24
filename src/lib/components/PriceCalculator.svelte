<script>
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	let price = 0;
</script>

<Card.Root class="w-[400px]">
	<Card.Header>
		<Card.Title>Create project</Card.Title>
		<Card.Description>Deploy your new project in one-click.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
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
		</form>
	</Card.Content>
</Card.Root>

<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Github from 'lucide-svelte/icons/github';
</script>

<nav class="p-4 border-b border-gray-800">
	<div class="container mx-auto flex items-center justify-between">
		<div class="flex items-center gap-x-20">
			<a href="/" class="text-white text-2xl font-bold">AI Zoo</a>

			<HoverCard.Root openDelay={0}>
				<HoverCard.Trigger class="text-base">Suppliers</HoverCard.Trigger>
				<HoverCard.Content class="w-[100px] mt-1">
					<a href="/">Pricing</a>
				</HoverCard.Content>
			</HoverCard.Root>
		</div>
		<div>
			<a href="https://github.com/vivalence/AI-Zoo" target="_blank">
				<Github />
			</a>
		</div>
	</div>
</nav>

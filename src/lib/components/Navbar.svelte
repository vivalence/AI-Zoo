<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Github from 'lucide-svelte/icons/github';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
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
		<div class="flex items-center gap-x-4">
			<a href="https://github.com/vivalence/AI-Zoo" target="_blank">
				<Github />
			</a>

			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
</nav>

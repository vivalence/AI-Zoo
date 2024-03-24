<script lang="ts">
	import SquareArrowOutUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';
	import { Button } from '$lib/components/ui/button';

	export let url: string;
</script>

<a href={url}>
	<Button variant="ghost" size="icon" class="relative h-8 w-8 p-0">
		<span class="sr-only">Open Source</span>
		<SquareArrowOutUpRight class="h-4 w-4" />
	</Button>
</a>

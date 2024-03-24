<script>
	import ThSort from '$lib/components/Datatable/ThSort.svelte';
	import RowCount from '$lib/components/Datatable/RowCount.svelte';
	import Pagination from '$lib/components/Datatable/Pagination.svelte';
	import { dummy } from '../../../../data/suppliers/Dummy/dummy';
	import { DataHandler } from '@vincjo/datatables';

	const handler = new DataHandler(dummy, { rowsPerPage: 10 });
	const rows = handler.getRows();
</script>

<div class=" overflow-x-auto space-y-4">
	<header class="flex justify-between gap-4"></header>
	<table class="table table-hover table-compact w-full table-auto">
		<thead>
			<tr>
				<ThSort {handler} orderBy="model">Supplier Name</ThSort>
				<ThSort {handler} orderBy="model">Model Name</ThSort>
				<ThSort {handler} orderBy="tokenWindow">Token Window</ThSort>
				<ThSort {handler} orderBy="costPerMillionTokensInput">Cost Input</ThSort>
				<ThSort {handler} orderBy="costPerMillionTokensOutput">Cost Output</ThSort>
				<ThSort {handler} orderBy="speedPerSecond">Speed (tokens per second)</ThSort>
				<ThSort {handler} orderBy="speedLatency">Latency to first token</ThSort>
				<ThSort {handler} orderBy="linkToSource">Link to Source</ThSort>
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td><strong>{row.model}</strong></td>
					<td>{row.model}</td>
					<td>{row.technical.token_window}</td>
					<td>{row.cost.per_million_tokens_input}</td>
					<td>{row.cost.per_million_tokens_output}</td>
					<td>{row.speed.tokens_per_second}</td>
					<td>{row.speed.latency_first_token_ms}</td>
					<td>
						<a
							href={row.source}
							class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						>
							Source
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>

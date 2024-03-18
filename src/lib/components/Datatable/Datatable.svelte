<script>
	import ThSort from '$lib/components/Datatable/ThSort.svelte';
	import RowCount from '$lib/components/Datatable/RowCount.svelte';
	import Pagination from '$lib/components/Datatable/Pagination.svelte';

	import { DataHandler } from '@vincjo/datatables';

	let datasets = Array.from({ length: 30 }, (_, index) => ({
		id: index + 1,
		name: `Dataset ${index + 1}`,
		costPerHour: Math.floor(Math.random() * 100),
		costPerMonth: Math.floor(Math.random() * 100) * 24 * 30
	}));

	const handler = new DataHandler(datasets, { rowsPerPage: 10 });
	const rows = handler.getRows();
</script>

<div class=" overflow-x-auto space-y-4">
	<header class="flex justify-between gap-4"></header>
	<table class="table table-hover table-compact w-full table-auto">
		<thead>
			<tr>
				<ThSort {handler} orderBy="name">Name</ThSort>
				<ThSort {handler} orderBy="costPerHour">Cost Per Hour</ThSort>
				<ThSort {handler} orderBy="costPerMonth">Cost Per Month</ThSort>
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td class="border-slate-600 border-r-2"><strong>{row.name}</strong></td>
					<td>${row.costPerHour}</td>
					<td>${row.costPerMonth}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>

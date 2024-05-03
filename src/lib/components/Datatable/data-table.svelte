<script lang="ts">
	import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
	import {
		addPagination,
		addSortBy,
		addHiddenColumns,
		addSelectedRows
	} from 'svelte-headless-table/plugins';
	import * as Table from '$lib/components/ui/table';
	import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
	import { readable } from 'svelte/store';
	import { Button } from '$lib/components/ui/button';
	import DataTableActions from './data-table-actions.svelte';
	import DataTableCheckbox from './data-table-checkbox.svelte';

	import { selectedIds, selectedRow } from '$lib/stores/datatable';
	import { suppliers } from '$data/suppliers/getAllObjects';


	const table = createTable(readable(suppliers), {
		page: addPagination(),
		sort: addSortBy(),
		select: addSelectedRows()
	});

	let selectedRowId: string | undefined;

	const handleRowClick = (row: any) => {
		selectedRow.set(row);
		selectedRowId = row.id
	};

	const columns = table.createColumns([
		table.column({
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select;
				return createRender(DataTableCheckbox, {
					checked: allPageRowsSelected
				});
			},
			accessor: (row) => row.supplier.id,
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select;
				const { isSelected } = getRowState(row);

				return createRender(DataTableCheckbox, {
					checked: isSelected
				});
			},
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => row.supplier.id,
			header: 'Supplier'
		}),
		table.column({
			accessor: (row) => row.name,
			header: 'Model'
		}),
		table.column({
			accessor: (row) => row.technical.token_window,
			header: 'Token Window',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => `$${row.cost.per_million_tokens_input}`,
			header: 'Cost Input',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => `$${row.cost.per_million_tokens_output}`,
			header: 'Cost Output',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => `${row.speed.latency_first_token_ms}ms`,
			header: 'Latency to first token',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => row.speed.tokens_per_second,
			header: 'Speed (tokens per second)',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => row.supplier.docs,
			header: 'Link to Source',
			cell: ({ value }) => {
				return createRender(DataTableActions, { url: value });
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, rows } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;

	const { selectedDataIds } = pluginStates.select;

	let selectedId: (string | undefined)[];

	$: {
		// The lib returns the id by the index of the row in the table, this is why we need to convert it to the real id
		selectedId = Object.entries($selectedDataIds)
			.filter(([id, isSelected]) => isSelected && $rows[Number(id)])
			.map(([id]) => {
				const row = $rows[Number(id)];
				if (!row.isData()) return;
				return row.original.id;
			});

		selectedIds.set(selectedId);
	}
</script>

<div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
									<Table.Head {...attrs}>
										{#if cell.id === 'model'}
											<Button variant="ghost" on:click={props.sort.toggle}>
												<Render of={cell.render()} />
											<ArrowUpDown class={'ml-2 h-4 w-4'} />
											</Button>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
						<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
								<Table.Row {...rowAttrs} on:click={() => handleRowClick(row.original)}>
												{#each row.cells as cell (cell.id)}
														<Subscribe attrs={cell.attrs()} let:attrs>
																<Table.Cell {...attrs}>
																		<Render of={cell.render()} />
																</Table.Cell>
														</Subscribe>
												{/each}
								</Table.Row>
						</Subscribe>
				{/each}
		</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-end space-x-4 py-4">
		<Button
			variant="outline"
			size="sm"
			on:click={() => ($pageIndex = $pageIndex - 1)}
			disabled={!$hasPreviousPage}>Previous</Button
		>
		<Button
			variant="outline"
			size="sm"
			disabled={!$hasNextPage}
			on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
		>
	</div>
</div>


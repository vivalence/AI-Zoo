<script lang="ts">
	import { createTable, Render, Subscribe } from 'svelte-headless-table';
	import {
		addPagination,
		addSortBy,
		addHiddenColumns,
		addSelectedRows
	} from 'svelte-headless-table/plugins';
	import * as Table from '$lib/components/ui/table';
	import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
	import { readable } from 'svelte/store';
	import { dummy } from '../../../../data/suppliers/Dummy/dummy';
	import { Button } from '$lib/components/ui/button';

	const table = createTable(readable(dummy), {
		page: addPagination(),
		sort: addSortBy(),
		hide: addHiddenColumns()
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'model',
			header: 'Supplier Name'
		}),
		table.column({
			accessor: (row) => row.model,
			header: 'Model Name'
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
			accessor: (row) => row.cost.per_million_tokens_input,
			header: 'Cost Input',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => row.cost.per_million_tokens_output,
			header: 'Cost Output',
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
			accessor: (row) => row.speed.latency_first_token_ms,
			header: 'Latency to first token',
			plugins: {
				sort: {
					disable: true
				}
			}
		}),
		table.column({
			accessor: (row) => row.source,
			header: 'Link to Source'
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
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
						<Table.Row {...rowAttrs}>
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

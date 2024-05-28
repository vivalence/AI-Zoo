# Generating Charts Demo

In this guide, I'll demonstrate how you can integrate a chart into the application.

## Available Chart Types and Data Shape

### Chart Types:

1. [**Bar Chart**](https://www.chartjs.org/docs/latest/charts/bar.html#example-dataset-configuration): Displays data as rectangular bars with lengths proportional to the values they represent.
2. [**Scatter Plot**](https://www.chartjs.org/docs/latest/charts/scatter.html#data-structure): Shows individual data points on a two-dimensional plane.

## Accessing Supplier/Model Data

To access supplier/model data, follow these steps:

1. Subscribe to the `selectedModels` store to get the currently selected model IDs.
2. Filter the `suppliers` data based on the selected model IDs.
3. Sort the filtered data based on the desired metric (e.g., cost per million tokens).
4. Extract necessary data (e.g., model names, cost per million tokens, speed) for chart generation.
5. Format the data according to the required shape for the chosen chart type.

## Generating Charts

To generate charts within `Chart.svelte`, follow these steps:

1. Add the name of the chart you've chosen to `activeChart` and `chartTypes`.
2. Inside the `selectedModels` scope, structure the data according to the [documentation](https://www.chartjs.org/docs/latest/).
   **Note: Ensure to utilize the `sortedData` variable as a dataset to dynamically update your chart based on user actions.**
3. If you require additional options for the chart, place them inside the `chartOptions.ts` file.
4. Once all the data is set, include it in the HTML like this:

```html
{#if activeChart === 'bar'}
<Bar data="{dataBar}" options="{optionsBar}" width="{900}" height="{100}" />
{:else if activeChart === 'scatter'}
<Scatter data="{dataScatter}" options="{optionsScatter}" width="{900}" height="{100}" />
{:else if activeChart === 'custom'}
<YourChart data="{yourData}" options="{yourOptions}" width="{900}" height="{100}" />
{/if}
```

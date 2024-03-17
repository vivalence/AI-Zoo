<script>
	let input1 = '';
	let input2 = '';
	let price = 0;
</script>

<div class="flex flex-col bg-gray-100 p-6 rounded-lg max-w-96">
	<input
		type="number"
		bind:value={input1}
		class="mb-4 p-2 border border-gray-300 rounded-md"
		placeholder="Lorem Ipsum"
	/>
	<input
		type="number"
		bind:value={input2}
		class="mb-4 p-2 border border-gray-300 rounded-md"
		placeholder="Lorem Ipsum"
	/>
	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
		Calculate Price
	</button>
	<div class="mt-4 text-xl">
		&euro; {price}
	</div>
</div>

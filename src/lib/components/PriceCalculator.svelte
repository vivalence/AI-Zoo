<script>
	let input1 = '';
	let input2 = '';
	let price = 0;
</script>

<div class="card p-6 w-[500px] flex flex-col">
	<div>
		<div class="flex flex-col gap-y-3">
			<label for="input2">Lorem Ipsum</label>
			<input
				type="number"
				bind:value={input1}
				class="mb-4 p-2 border border-gray-300 rounded-md w-full"
				placeholder="Lorem Ipsum"
			/>
		</div>
		<div class="flex flex-col gap-y-3">
			<label for="input2">Lorem Ipsum</label>
			<input
				type="number"
				bind:value={input2}
				class="mb-4 p-2 border border-gray-300 rounded-md w-full"
				placeholder="Lorem Ipsum"
			/>
		</div>
		<div class="mt-4">
			<button type="button" class="btn bg-blue-500 text-white font-bold p-3 rounded">
				Calculate Price
			</button>
		</div>
	</div>
	<div class="mt-12 text-xl bg-gray-200 rounded p-2">
		<p class="font-display text-black">&euro; {price}</p>
	</div>
</div>

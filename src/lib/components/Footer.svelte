<script>
	import { Github, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-gray-800 text-white px-6 py-8">
	<div class="container mx-auto">
		<div class="flex flex-wrap justify-center mb-8">
			<div class="w-full md:w-2/3 md:pr-2">
				<h3 class="text-white font-medium mb-1">How to contribute to the AI Zoo:</h3>
				<p>Enhance our dataset by adding a model in <code>/data/suppliers</code>.</p>
				<p>Or add new chart or even a whole new category in <code>/src/routes</code>.</p>
			</div>
			<div class="w-full md:w-1/3 md:px-4">
				<h3 class="text-white font-medium mb-1">Connect with us</h3>

				<ul class="flex gap-4">
					<li>
						<a href="https://twitter.com/FinnFrotscher" target="_blank" class="text-white"
							><Twitter color="#fff" size="24" /></a
						>
					</li>
					<li>
						<a href="https://github.com/lazerjesus" target="_blank" class="text-white"
							><Github color="#fff" size="24" /></a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t border-gray-700 my-4"></div>
		<p class="text-center">This page is community sourced - reading this makes you community 🔥</p>
	</div>
</footer>

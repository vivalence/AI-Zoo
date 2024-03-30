<script>
	import { Github, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-gray-800 text-white p-4">
	<div class="container mx-auto">
		<div class="flex flex-wrap justify-center">
			<div class="w-full md:w-1/2">
				<h3 class="text-white">Contribute to the AI Zoo</h3>
				<p>Enhance our dataset by adding a model in <code>/data/suppliers</code></p>
				<p>Or, add new chart or even a whole new category in <code>/src/routes</code></p>
			</div>
			<div class="w-full md:w-1/2">
				<h3 class="text-white">Connect with Us</h3>
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
		<p class="text-center">This page is community sourced - reading this makes you community 📛</p>
	</div>
</footer>

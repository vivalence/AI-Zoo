<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen font-display">
	<Navbar />
	<slot />
	<Footer />
</div>

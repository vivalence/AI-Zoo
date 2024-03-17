<script>
	import Navbar from '../components/Navbar/Navbar.svelte';
	import '../app.css';
	import Footer from '../components/Footer/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen font-display">
	<Navbar />
	<slot />
	<Footer />
</div>

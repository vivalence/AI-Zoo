<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ModeWatcher } from "mode-watcher";
	import '../app.css';
</script>


<svelte:head>
    <title>AI Zoo | Open-Source AI Comparison</title>
    <meta name="description" content="A straightforward and contributor-driven platform for comparison of AI models and their suppliers. " />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="https://vivalence.github.io/AI-Zoo/" />
    <meta property="og:title" content="AI Zoo | Open-Source LLM Comparison" />
    <meta property="og:description" content="Dive into detailed comparisons and analyses of large language models (LLMs) on AI Zoo. Discover the best LLM for your needs through open-source collaboration." />
    <meta property="og:url" content="https://vivalence.github.io/AI-Zoo/" />
    <!-- <meta property="og:image" content="https://vivalence.github.io/AI-Zoo/assets/og-image.jpg" /> <\!-- Ensure you have an og-image.jpg that represents the site. -\-> -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AI Zoo | Open-Source LLM Comparison" />
    <meta name="twitter:description" content="Join AI Zoo to compare large language models (LLMs) on metrics like performance, cost, and speed. Contribute to or utilize our open-source data to make informed decisions." />
    <!-- <meta name="twitter:image" content="https://vivalence.github.io/AI-Zoo/assets/twitter-card-image.jpg" /> <\!-- Ensure you have a twitter-card-image.jpg that represents the site. -\-> -->
    <meta name="robots" content="index, follow" />
</svelte:head>

<div class="flex flex-col min-h-screen font-display">
    
	<Navbar />
    <ModeWatcher />
	<slot />
	<Footer />
</div>

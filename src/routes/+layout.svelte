<script>
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="flex flex-col max-h-[100dvh] max-h-screen">
	<Header />
	<div class="h-full">
		<slot />
	</div>
	<Footer />
</div>

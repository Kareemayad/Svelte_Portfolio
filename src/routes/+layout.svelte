<script>
	import '../app.postcss';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="w-full min-h-screen-new">
	<div class="w-full min-h-header">
		<Header />
	</div>
	<div class="flex-center stretch min-h-page">
		<slot />
	</div>
	<div class="w-full min-h-footer">
		<Footer />
	</div>
</div>

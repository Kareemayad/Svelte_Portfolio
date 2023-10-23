<script lang="ts">
	import dataArray from '$lib/data.json';
</script>

<div class="bg-gray-100 flex items-center justify-center w-full flex-col gap-20 py-10">
	<!-- Main content -->
	{#each dataArray as data, i}
		<div class="flex flex-row justify-between gap-3 items-center w-full">
			<div class="text-center w-full {i % 2 ? 'order-last' : ''}">
				<h1 class="text-5xl font-semibold mb-4">{data.title}</h1>
				<p class="text-gray-500 w-full leading-relaxed justify-center flex">
					{data.description}
				</p>
			</div>

			<div class="w-full">
				<img src={data.src} alt={data.alt} class="w-full px-5 shadow-md" />
			</div>
		</div>
	{/each}
</div>

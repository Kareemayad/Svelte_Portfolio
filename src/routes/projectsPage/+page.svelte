<script lang="ts">
	const dataArray = [
		{
			title: 'Project 1',
			description:
				'Breakout is a classic computer arcade game Demonstrate a practical understanding of Object-Oriented programming techniques Use sequence, selection and iteration to develop simple applications Utilize a variety of data types and collections Test and debug simple programs.',
			src: 'BreakOut-game.png',
			alt: 'Break Out Game'
		},
		{
			title: 'Project 2',
			description:
				'Breakout is a classic computer arcade game Demonstrate a practical understanding of Object-Oriented programming techniques Use sequence, selection and iteration to develop simple applications Utilize a variety of data types and collections Test and debug simple programs.',
			src: 'BreakOut-game.png',
			alt: 'Break Out Game'
		},
		{
			title: 'Project 3',
			description:
				'Breakout is a classic computer arcade game Demonstrate a practical understanding of Object-Oriented programming techniques Use sequence, selection and iteration to develop simple applications Utilize a variety of data types and collections Test and debug simple programs.',
			src: 'BreakOut-game.png',
			alt: 'Break Out Game'
		},
		{
			title: 'Project 4',
			description:
				'Breakout is a classic computer arcade game Demonstrate a practical understanding of Object-Oriented programming techniques Use sequence, selection and iteration to develop simple applications Utilize a variety of data types and collections Test and debug simple programs.',
			src: 'BreakOut-game.png',
			alt: 'Break Out Game'
		},
		{
			title: 'Project 5',
			description:
				'Breakout is a classic computer arcade game Demonstrate a practical understanding of Object-Oriented programming techniques Use sequence, selection and iteration to develop simple applications Utilize a variety of data types and collections Test and debug simple programs.',
			src: 'BreakOut-game.png',
			alt: 'Break Out Game'
		},
		{
			title: 'Project 6',
			description:
				'Breakout is a classic computer arcade game Demonstrate a practical understanding of Object-Oriented programming techniques Use sequence, selection and iteration to develop simple applications Utilize a variety of data types and collections Test and debug simple programs.',
			src: 'BreakOut-game.png',
			alt: 'Break Out Game'
		}
	];
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

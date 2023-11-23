<script lang="ts">
	let readmore = false;
</script>

<div class="w-full flex justify-between items-center ml-36 flex-row pr-3 h-full relative">
	<div class="relative flex flex-col w-2/5 lg:w-2/3 text-left text-lg max-w-5xl gap-6">
		<div class="gap-2 flex flex-col">
			<div class="text-4xl font-bold"><h1>Hi there!</h1></div>
			<div class="text-6xl font-bold"><h1>I'm Kareem</h1></div>
			<div class="font-semibold max-w-sm bg-blue-600 p-1 text-white">
				<h1>Computer Scientist with Artificial Intelligence</h1>
			</div>
		</div>
		<p class="max-w-4xl">
			I'm a recent graduate in Computer Science specializing in Artificial Intelligence from the
			esteemed University of Brighton. Passionate about emerging technologies, I am committed to
			leveraging AI to create solutions that drive efficiency and innovation. During my studies, I
			had the opportunity to work on various projects that allowed me to hone my programming and
			problem-solving skills.<br /><br />
			{#if readmore}
				<span>
					My hands-on experience includes working with languages such as Python, Java, and C++,
					Html, Css, JavaScript, as well as frameworks like TensorFlow and PyTorch Svelte, React,
					Vue. Some key highlights from my academic journey include: Leading a team project to
					develop an AI-powered recommendation system that demonstrated a 20% improvement in user
					engagement. Completing an internship at Juhayna, where I contributed to optimizing machine
					learning algorithms for real-world applications. Publishing a research paper on Natural
					Language Processing (NLP) in collaboration with my professors, focusing on sentiment
					analysis in social media. I am constantly seeking opportunities to learn and grow within
					the tech industry. Currently, I am open to entry-level positions where I can apply my
					knowledge in AI and software development to create impactful solutions. I am particularly
					interested in roles that allow for collaboration, creativity, and the chance to contribute
					to cutting-edge projects. Feel free to connect with me or send a message if you'd like to
					discuss potential opportunities, collaboration, or simply want to chat about the exciting
					world of AI! <br /><br />
				</span>

				<button class="text-white bg-blue-500 rounded-xl p-2" on:click={() => (readmore = false)}
					>Read less</button
				>
			{:else}
				<button class="text-white bg-blue-500 rounded-xl p-2" on:click={() => (readmore = true)}
					>More About Me</button
				>
			{/if}
		</p>
	</div>
	<div class="h-page w-3/5 lg:w-1/3">
		<img class="h-full w-full object-cover" alt="Sorty" src="mypicture.jpg" />
	</div>
</div>

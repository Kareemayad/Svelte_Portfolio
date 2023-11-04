<script lang="ts">
	let readmore = false;
</script>

<div class="w-full flex justify-between items-center flex-row gap-3 pr-3 h-full relative">
	<div class="h-page w-3/5 lg:w-1/3">
		<img class="h-full w-full object-cover" alt="Sorty" src="mypicture.jpg" />
	</div>
	<div class="relative block w-2/5 lg:w-2/3 text-center text-lg">
		<div>
			<div><h1>Hi there</h1></div>
		</div>
		<p>
			I'm a recent graduate in Computer Science specializing in Artificial Intelligence from the
			esteemed University of Brighton. Passionate about emerging technologies, I am committed to
			leveraging AI to create solutions that drive efficiency and innovation.
			{#if readmore}
				<span
					>During my studies, I had the opportunity to work on various projects that allowed me to
					hone my programming and problem-solving skills. My hands-on experience includes working
					with languages such as Python, Java, and C++, Html, Css, JavaScript, as well as frameworks
					like TensorFlow and PyTorch Svelte, React, Vue. Some key highlights from my academic
					journey include: Leading a team project to develop an AI-powered recommendation system
					that demonstrated a 20% improvement in user engagement. Completing an internship at
					Juhayna, where I contributed to optimizing machine learning algorithms for real-world
					applications. Publishing a research paper on Natural Language Processing (NLP) in
					collaboration with my professors, focusing on sentiment analysis in social media. I am
					constantly seeking opportunities to learn and grow within the tech industry. Currently, I
					am open to entry-level positions where I can apply my knowledge in AI and software
					development to create impactful solutions. I am particularly interested in roles that
					allow for collaboration, creativity, and the chance to contribute to cutting-edge
					projects. Feel free to connect with me or send a message if you'd like to discuss
					potential opportunities, collaboration, or simply want to chat about the exciting world of
					AI!</span
				>
				<button class="text-blue-500" on:click={() => (readmore = false)}>Read less</button>
			{:else}
				<button class="text-blue-500" on:click={() => (readmore = true)}>Read more</button>
			{/if}
		</p>
	</div>
</div>

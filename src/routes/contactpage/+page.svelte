<div style="display: contents">
	<div class="drawer">
		<input type="checkbox" />
		<div class="!w-full overflow-hidden drawer-content">
			<div class="w-full min-h-screen-new">
				<div class="w-full min-h-header">
					<div class="header">
						<div class="relative flex justify-center sm:justify-between navbar bg-base-100">
							<a href="/"
								><div class="text-5xl sm:text-4xl normal-case btn btn-ghost !bg-inherit">KA</div></a
							>
							<div class="flex-none hidden sm:block">
								<ul class="gap-3 px-1 text-lg menu menu-horizontal">
									<li class="flex items-center justify-center text-2xl">
										<div class="!bg-inherit !text-inherit !cursor-default">
											<button
												data-toggle-theme="retro,forest"
												class="icon hover:scale-110 svelte-sntbt3 null"
											/>
										</div>
									</li>
								</ul>
							</div>
							<div
								class="absolute flex w-full pointer-events-none sm:hidden"
								data-svelte-h="svelte-1jhx98x"
							>
								<label
									for="layout-drawer"
									class="mx-6 text-3xl cursor-pointer pointer-events-auto hover:scale-105 drawer-button i-material-symbols-list-rounded"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-center stretch min-h-page">
					<div class="flex-col gap-6 px-2 prose sm:pb-40 flex-center stretch">
						<h2 class="m-0">Contact me</h2>
						<p class="px-6 m-0">
							You can contact me by sending an email to <a
								href="mailto:Kareemayad100@gmail.com"
								class="link link-primary">Kareemayad100@gmail.com</a
							>
							or by sending me a message using the following form.
						</p>
						<form
							id="contact"
							class="flex-col w-full max-w-xl gap-3 px-10 flex-center text-start"
							method="POST"
						>
							<div class="flex flex-col gap-3">
								<div class="flex flex-row gap-2">
									<label class="w-full"
										>Name:<br /><input
											placeholder="Your name"
											class="w-full !outline-none input input-bordered"
											type="text"
											id="name"
											name="name"
										/></label
									>
								</div>
								<div class="flex flex-row gap-2">
									<label class="w-full"
										>Email:<br /><input
											placeholder="Your name"
											class="w-full !outline-none input input-bordered"
											type="email"
											id="email"
											name="email"
										/></label
									>
								</div>
								<div class="flex flex-row gap-2">
									<label class="w-full"
										>Message:<br />
										<textarea
											class="!outline-none textarea textarea-bordered w-full"
											placeholder="Your name"
											id="message"
											name="message"
										/></label
									>
								</div>
							</div>
							<button class="mt-10 btn btn-primary btn-wide">Submit</button>
						</form>
					</div>
				</div>
				<div class="w-full min-h-footer" />
			</div>
		</div>
	</div>
	<div class="hidden">
		<div class="!bg-inherit !text-inherit !cursor-default">
			<button data-toggle-theme="retro,forest" class="icon hover:scale-110 svelte-sntbt3 null" />
		</div>
	</div>
	<div class="toaster svelte-1phplh9" role="alert" />
	<div
		id="svelte-announcer"
		aria-live="assertive"
		aria-atomic="true"
		style="position: absolute; left: 0px; top: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px;"
	>
		untitled page
	</div>
</div>

<script lang="ts">
	import type { PersonnelApi } from '$lib/interfaces/PersonnelApi';

	export let personal: PersonnelApi | undefined = undefined;
</script>
<!-- justify-self-center col-span-3 -->

<div
	class={`w-[16rem] flex flex-col gap-2 p-3 rounded-xl relative select-none bg-repeat drop-shadow-xl self-center justify-self-center ${personal.isCenter ? " col-span-0 sm:col-span-2 md:col-span-3 lg:col-span-4" : ""}`}
>
	<div class="flex justify-center ">
		{#if personal.image}
			<img
				src={personal.image.url}
				alt={personal.fullname}
				class="rounded-full w-[12rem] drop-shadow-xl"
			/>
		{:else}
			<div
				class="w-[12rem] h-[12rem] flex flex-col text-white bg-gray-500 justify-center items-center border-2 rounded-full"
			>
				NO PHOTO
			</div>
		{/if}
	</div>
	<div class="flex flex-col text-center  mt-3 h-full w-full rounded-lg max-w-sm mx-auto ">
		<div class="text-sm font-bold drop-shadow-md">
			{personal.fullname}
		</div>
		<div>{@html personal.position.html}</div>
	</div>
</div>

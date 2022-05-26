<script lang="ts">
	export let title: string | undefined = undefined;
	export let value: number | undefined = undefined;
	export let image_url: string | undefined = undefined;
	export let classCustom: string | undefined = undefined;
</script>

<div class={`bg-[#424874] border-l-[1rem] border-[#A6B1E1] w-full rounded-xl p-5 flex items-center h-full gap-8 ${classCustom ? classCustom : ''}`}>
	{#if image_url}
		<img src={image_url} class="w-24 drop-shadow-md" alt="" />
	{/if}
	<div class="flex flex-col text-white ">
		<div class="text-2xl">{title}</div>
		<div class="text-lg">จำนวน {value} คน</div>
	</div>
</div>

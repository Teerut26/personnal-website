<script lang="ts">
	import CardPerson from '$lib/components/CardPerson.svelte';
	import DrawerSide from '$lib/components/DrawerSide.svelte';

	import Navbar from '$lib/components/Navbar.svelte';

	import type { _ID } from '$lib/interfaces/_ID';

	export let data: _ID | undefined = undefined;
</script>

<!-- <div>{JSON.stringify(data)}</div> -->

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col h-screen">
		<Navbar />
		<div class="grow">
			<div class="flex flex-col gap-3 p-3 h-full">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{#each data.data.pages[0].personnelApi as personal}
						<CardPerson {personal} />
					{/each}
				</div>
			</div>
		</div>
	</div>
	<DrawerSide />
</div>

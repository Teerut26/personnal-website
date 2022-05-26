<script lang="ts">
	import type { Index } from '$lib/interfaces/Index';
	import Navbar from '$lib/components/Navbar.svelte';
	import Card from '$lib/components/Card.svelte';
	import DrawerSide from '$lib/components/DrawerSide.svelte';

	export let data: Index;
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col h-screen">
		<Navbar />
		<div class="grow">
			<div class="flex flex-col gap-3 p-3 h-full">
				<Card
					title={'บุคลากรทั้งหมด'}
					value={data.data.personnelApi.length}
					classCustom="text-center justify-center"
				/>
				<div class="flex flex-col h-full md:flex-row gap-3">
					<Card
						image_url="/male.png"
						classCustom="justify-center"
						title={'บุคลากรชาย'}
						value={data.data.personnelApi.filter(item=>!item.isFemale).length}
					/>
					<Card
						image_url="/female.png"
						classCustom="justify-center"
						title={'บุคลากรหญิง'}
						value={data.data.personnelApi.filter(item=>item.isFemale).length}
					/>
				</div>
			</div>
		</div>
	</div>
	<DrawerSide  />
</div>

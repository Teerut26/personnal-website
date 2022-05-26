<script lang="ts">
	import FaBars from './Icons/faBars.svelte';
</script>

<div>
	<div class=" h-[13rem] relative overflow-hidden">
		<div
			class="absolute bottom-0 left-0 right-0 top-0 z-10 flex justify-center items-center bg-black/50 text-white"
		>
			<div class="flex flex-col items-center gap-2">
				<div class="text-5xl">บุคลากร</div>
				<div class="text-xl">โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี</div>
			</div>
		</div>

		<img class="object-cover w-full h-full" src="/2.jpg" alt="" />
	</div>
</div>
<div class="p-3 text-xl border-b sticky top-0 z-10 bg-[#424874] text-white">
	<div class="max-w-5xl flex gap-2 mx-auto justify-between relative">
		<div class="flex flex-row items-center justify-between w-full">
			<div>บุคลากร</div>
			<label for="my-drawer"><FaBars /></label>
		</div>
	</div>
</div>

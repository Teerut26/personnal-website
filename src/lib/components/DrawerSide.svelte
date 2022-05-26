<script lang="ts">
	import type { Index } from '$lib/interfaces/Index';

	import type { Page } from '$lib/interfaces/Page';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import FaArrowRight from './Icons/faArrowRight.svelte';
	import FaHome from './Icons/faHome.svelte';
	import FaLock from './Icons/faLock.svelte';
	export let pages = writable<Page[] | undefined>();
	// export let pages: Page[] | undefinedPage[] | undefined = undefined;

	onMount(async () => {
		let { data } = await axios.post<Index>(
			'https://api-ap-south-1.graphcms.com/v2/cl3jvgnue8p3c01xpgr57fseu/master',
			{
				query: `
            {
                pages{
                  page
                  slug
                }
                personnelApi{
                  id
                }
              }`,
				variables: null
			}
		);
		pages.set(data.data.pages);
	});
	// console.log($pages);
</script>

<div class="drawer-side ">
	<label for="my-drawer" class="drawer-overlay" />
	<ul class="menu p-4 overflow-y-auto w-80 text-white bg-[#424874]">
		<li>
			<a
				class="flex flex-row"
				href="https://app.graphcms.com/0cdbd93169d74e0b8a92920252a34621/master"
				><div class="w-5">
					<FaLock />
				</div>
				เข้าสู่ระบบ</a
			>
		</li>
		<li>
			<a class="flex flex-row" href={`/`}
				><div class="w-5">
					<FaHome />
				</div>
				หน้าแรก</a
			>
		</li>
		{#if $pages}
			{#each $pages as page}
				<li>
					<a class="flex flex-row" href={`/${page.slug}`}>
						<div class="w-5">
							<FaArrowRight />
						</div>
						{page.page}</a
					>
				</li>
			{/each}
		{/if}
	</ul>
</div>
